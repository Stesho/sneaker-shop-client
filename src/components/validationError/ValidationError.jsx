import React from 'react';
import styles from './ValidationError.module.scss';

const ValidationError = ({message}) => {
  return (
    <div className={styles.validationError}>
      <span className={styles.validationError__icon}>!</span>
      <span className={styles.validationError__message}>{message}</span>
    </div>
  );
};

export default ValidationError;