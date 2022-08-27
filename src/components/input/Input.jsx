import React from 'react';
import styles from './Input.module.scss';

const Input = ({style, placeholder}) => {
  return (
    <input className={styles.input} placeholder={placeholder} type="text" style={style?.input}/>
  );
};

export default Input;