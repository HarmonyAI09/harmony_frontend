import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';

import classes from './index.module.scss';

interface IAccordionProps {
  active?: boolean;
  header: string;
  body: string;
  onClick?: () => void;
}

function Accordion({ active, header, body, onClick }: IAccordionProps) {
  return (
    <div className={classes.root}>
      <div className={classes.header} onClick={onClick}>
        <p>{header}</p>
        <span>{active ? <FaChevronUp /> : <FaChevronDown />}</span>
      </div>
      {active && (
        <div className={classes.body}>
          <p>{body}</p>
        </div>
      )}
    </div>
  );
}

export default Accordion;
