import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import classes from './index.module.scss';

interface IImageSlideProps {
  images: string[];
}

function ImageSlide({ images }: IImageSlideProps) {
  const [slideIndex, setSlideIndex] = useState(0);
  let timeoutID = -1;

  useEffect(() => {
    timeoutID = setTimeout(() => {
      setSlideIndex((slideIndex + 1) % 6);
    }, 3000);
    return () => {
      clearTimeout(timeoutID);
    };
  }, [slideIndex]);

  useEffect(() => {}, []);

  return (
    <div className={classes.root}>
      {images.map(
        (imageUrl: string, index: number) =>
          slideIndex === index && (
            <AnimatePresence mode="sync">
              <motion.img
                key={index}
                src={imageUrl}
                initial={{ opacity: 0.3 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.7 }}
                transition={{
                  duration: 1,
                }}
              />
            </AnimatePresence>
          )
      )}
    </div>
  );
}

export default ImageSlide;
