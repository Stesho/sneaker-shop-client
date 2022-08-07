import React from 'react';
import styles from './Button1.module.scss';

const Button1 = ({children}) => {
  return (
    <button className={styles.btn}>
      {children}
    </button>
  );
};

export default Button1;