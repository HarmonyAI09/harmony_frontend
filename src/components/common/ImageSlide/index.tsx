import { useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';

import classes from './index.module.scss';

interface IImageSlideProps {
  images: string[];
}

const variants = (width: number) => ({
  enter: (direction: number) => {
    return {
      x: direction > 0 ? width * 2 : -width * 2,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? width * 2 : -width * 2,
      opacity: 0,
    };
  },
});

const swipeConfidenceThreshold = 5000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

function ImageSlide({ images }: IImageSlideProps) {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageRef = useRef<HTMLImageElement>(null);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className={classes.root}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          ref={imageRef}
          src={images[imageIndex]}
          custom={direction}
          variants={variants(imageRef.current?.clientWidth || 0)}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 50 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <span className={classes.leftBtn} onClick={() => paginate(1)}>
        <FaChevronLeft />
      </span>
      <span className={classes.rightBtn} onClick={() => paginate(-1)}>
        <FaChevronRight />
      </span>
    </div>
  );
}

export default ImageSlide;
