import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';

import classes from './index.module.scss';

interface IAccordionProps {
  active?: boolean;
  header: string;
  body: React.ReactNode;
  onClick?: () => void;
}

function Accordion({ active, header, body, onClick }: IAccordionProps) {
  return (
    <div className={classes.root}>
      <div className={classes.header} onClick={onClick}>
        <p>{header}</p>
        <span>{active ? <FaChevronUp /> : <FaChevronDown />}</span>
      </div>
      <AnimatePresence mode="wait">
        {active && (
          <motion.div
            className={classes.body}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <pre>{body}</pre>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Accordion;
