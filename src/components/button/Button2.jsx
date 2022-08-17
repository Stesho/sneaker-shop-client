import React from 'react';
import styles from './Button2.module.scss';

const Button2 = ({children, onClick}) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button2;