import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

const Scene3D: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

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
    const dotTexture = loader.load('img/dotTexture.png');

    const radius = 50;
    const sphereGeom = new THREE.IcosahedronGeometry(radius, 5);
    const bufferDotsGeom = new THREE.BufferGeometry();
    const positions = bufferDotsGeom.attributes.position.array;

    // Assuming animateDot() can handle BufferAttribute or its raw array
    for (let i = 0; i < positions.length; i += 3) {
      let vector = new THREE.Vector3(
        positions[i],
        positions[i + 1],
        positions[i + 2]
      );
      animateDot(vector); // You need to ensure that animateDot() can handle this input

      // If animateDot() modifies the vector, reflect the changes in the positions array
      positions[i] = vector.x;
      positions[i + 1] = vector.y;
      positions[i + 2] = vector.z;
    }

    // Update the position attribute if needed
    bufferDotsGeom.attributes.position.needsUpdate = true;

    function animateDot(vector: THREE.Vector3) {
      gsap.to(vector, {
        x: 0,
        z: 0,
        duration: 4,
        ease: 'back.out',
        repeat: -1,
        yoyo: true,
        onUpdate: () => updateDot(vector),
      });
    }

    function updateDot(vector: THREE.Vector3) {
      positions[vector.index * 3] = vector.x;
      positions[vector.index * 3 + 2] = vector.z;
    }

    const attributePositions = new THREE.BufferAttribute(positions, 3);
    bufferDotsGeom.setAttribute('position', attributePositions);
    const shaderMaterial = new THREE.ShaderMaterial({
      uniforms: {
        texture: { value: dotTexture },
      },
      vertexShader: document.getElementById('wrapVertexShader')!.textContent!,
      fragmentShader:
        document.getElementById('wrapFragmentShader')!.textContent!,
      transparent: true,
    });
    const dots = new THREE.Points(bufferDotsGeom, shaderMaterial);
    scene.add(dots);

    const render = () => {
      renderer.render(scene, camera);
    };

    gsap.ticker.add(render);

    window.addEventListener('resize', onResize);

    function onResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    return () => {
      gsap.ticker.remove(render);
      window.removeEventListener('resize', onResize);
      scene.remove(dots);
      bufferDotsGeom.dispose();
      shaderMaterial.dispose();
    };
  }, []);

  return (
    <div className="content">
      <canvas className="scene scene--full" id="scene" ref={canvasRef}></canvas>
      <div className="content__inner">
        <h2 className="content__title">Spacetime</h2>
        <h3 className="content__subtitle">Warp Drive</h3>
      </div>
    </div>
  );
};

export default Scene3D;
