import React from 'react';
import styles from './Input.module.scss';

const Input = ({className, value, onChange, onBlur, type, placeholder}) => {
  return (
    <input
      className={[styles.input, className].join(' ')}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;