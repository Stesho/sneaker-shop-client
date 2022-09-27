import React from 'react';
import styles from './Input.module.scss';

const Input = ({value, onChange, onBlur, type, style, placeholder}) => {
  return (
    <input
      className={styles.input}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      type={type}
      style={style?.input}
      placeholder={placeholder}
    />
  );
};

export default Input;