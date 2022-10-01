import React from 'react';
import styles from './Button2.module.scss';

const Button2 = ({children, onClick, disabled}) => {
  return (
    <button className={styles.btn} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button2;