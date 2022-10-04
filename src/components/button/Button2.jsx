import React from 'react';
import styles from './Button2.module.scss';

const Button2 = ({className, children, onClick, disabled}) => {
  return (
    <button className={[styles.btn, className].join(' ')} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button2;