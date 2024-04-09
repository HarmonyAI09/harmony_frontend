import React, { useRef, useEffect, useCallback } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { Back } from 'gsap';

// Make sure the path to your dotTexture.png is correct
import dotTextureImage from '@/assets/images/texture/user.png';

interface IAnimateDot {
  (index: number, vector: THREE.Vector3): void;
}

interface IUpdateDot {
  (index: number, vector: THREE.Vector3, positions: Float32Array): void;
}

const ThreeScene: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // You can define your shaders here as strings or import them from external files
  const vertexShader = `vertex shader code`;
  const fragmentShader = `fragment shader code`;

  const render = useCallback(
    (
      renderer: THREE.WebGLRenderer,
      scene: THREE.Scene,
      camera: THREE.PerspectiveCamera
    ) => {
      console.log(renderer, scene, camera);
      renderer.render(scene, camera);
    },
    []
  );

  const onResize = useCallback(
    (camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer) => {
      if (canvasRef.current) {
        const width = canvasRef.current.offsetWidth;
        const height = canvasRef.current.offsetHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }
    },
    []
  );

  const updateDot: IUpdateDot = useCallback((index, vector, positions) => {
    positions[index * 3] = vector.x;
    positions[index * 3 + 1] = vector.y;
    positions[index * 3 + 2] = vector.z;
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    const width = canvasRef.current.offsetWidth;
    const height = canvasRef.current.offsetHeight;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
    renderer.setSize(width, height);
    renderer.setClearColor(0x59c384);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 2000);
    camera.position.set(0, 0, 80);

    const loader = new THREE.TextureLoader();
    loader.crossOrigin = 'Anonymous';
    const dotTexture = loader.load(dotTextureImage);

    const radius = 50;
    const sphereGeom = new THREE.IcosahedronGeometry(radius, 5);
    const positionAttribute = sphereGeom.attributes.position;
    const positions = new Float32Array(positionAttribute.count * 3);
    const vertices: THREE.Vector3[] = [];
    for (let i = 0; i < positionAttribute.count; i++) {
      const vertex = new THREE.Vector3().fromBufferAttribute(
        positionAttribute,
        i
      );
      vertices.push(vertex);
      vertex.toArray(positions, i * 3);
    }

    const bufferDotsGeom = new THREE.BufferGeometry();
    bufferDotsGeom.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    );
    const shaderMaterial = new THREE.ShaderMaterial({
      uniforms: {
        texture: { value: dotTexture },
      },
      vertexShader,
      fragmentShader,
      transparent: true,
    });
    const dots = new THREE.Points(bufferDotsGeom, shaderMaterial);
    console.log(dots);
    scene.add(dots);

    const animateDot: IAnimateDot = (index, vector) => {
      gsap.to(vector, {
        x: 0,
        z: 0,
        duration: 4,
        ease: Back.easeOut,
        delay: Math.abs(vector.y / radius) * 2,
        repeat: -1,
        yoyo: true,
        yoyoEase: Back.easeOut,
        onUpdate: () => updateDot(index, vector, positions),
      });
    };

    vertices.forEach((vector: THREE.Vector3, i: number) => {
      animateDot(i, vector);
    });

    const onTick = () => {
      render(renderer, scene, camera);
    };

    gsap.ticker.add(onTick);
    window.addEventListener('resize', () => onResize(camera, renderer));

    // Clean up on unmount
    return () => {
      gsap.ticker.remove(onTick);
      window.removeEventListener('resize', () => onResize(camera, renderer));
      scene.remove(dots);
      bufferDotsGeom.dispose();
      shaderMaterial.dispose();
    };
  }, [render, onResize, updateDot]);

  return <canvas ref={canvasRef} style={{ width: '100vw', height: '100vh' }} />;
};

export default ThreeScene;
