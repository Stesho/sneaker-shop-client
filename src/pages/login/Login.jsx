import React from 'react';
import styles from './Login.module.scss';

const Login = () => {
  return (
    <main className={styles.login}>
      <h2 className={styles.login__title}>Login</h2>
      <p className={styles.login__caption}>Please enter your e-mail and password:</p>
    </main>
  );
};

export default Login;