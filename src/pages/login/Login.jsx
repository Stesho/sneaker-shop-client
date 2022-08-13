import React from 'react';
import { NavLink } from 'react-router-dom';
import Button2 from '../../components/button/Button2';
import Input from '../../components/input/Input';
import styles from './Login.module.scss';

const Login = () => {
  return (
    <main className={styles.loginWrapper}>
      <div className={styles.login}>
        <h2 className={[styles.login__title, styles.title2].join(' ')}>Login</h2>
        <p className={styles.login__caption}>Please enter your e-mail and password:</p>
        <form className={styles.login__form} action="">
          <Input style={{width: '400px', marginBottom: '15px'}} placeholder={'Email'}/>
          <Input style={{width: '400px', marginBottom: '15px'}} placeholder={'Password'}/>
          <Button2>Login</Button2>
        </form>
        <div className={styles.login__create}>
          <span>Don't have an account? </span>
          <NavLink to="/register">Create one</NavLink>
        </div>
      </div>
    </main>
  );
};

export default Login;