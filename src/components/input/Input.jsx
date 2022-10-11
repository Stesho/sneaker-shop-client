import React from 'react';
import styles from './Input.module.scss';

const Input = ({className, value, onChange, onFocus, type, placeholder}) => {
  return (
    <input
      className={[styles.input, className].join(' ')}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;