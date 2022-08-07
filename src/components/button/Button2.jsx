import React from 'react';
import styles from './Button2.module.scss';

const Button2 = ({children}) => {
  return (
    <button className={styles.btn}>
      {children}
    </button>
  );
};

export default Button2;