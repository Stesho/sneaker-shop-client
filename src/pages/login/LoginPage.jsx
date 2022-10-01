import React from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import Button2 from '../../components/button/Button2';
import Input from '../../components/input/Input';
import ValidationError from '../../components/validationError/ValidationError';
import styles from './LoginPage.module.scss';
import useInput from '../../hooks/useInput';

const LoginPage = () => {
  const validationMessages = {
    notEmpty: "Filed can't be empty",
    length: 'Field must contain from 8 to 40 symbols',
    isEmail: 'Incorrect email',
    isPassword: 'Password must contain at least 1 letter and 1 number',
  }
  const email = useInput('', {isEmail: true, notEmpty: true}, validationMessages);
  const password = useInput('', {isPassword: true, length: {min: 8, max: 40}, notEmpty: true}, validationMessages);
  const navigate = useNavigate();

  const isValidForm = () => {
    return email.validation.isError() || password.validation.isError();
  }

  const login = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post('http://localhost:3001/auth/login', {
        email: email.value,
        password: password.value,
      });
      navigate('/account');
    }
    catch(err) {
      console.log(err);
    }
  }

  return (
    <main className={[styles.main, styles.loginWrapper].join(' ')}>
      <div className={styles.login}>
        <h2 className={[styles.login__title, styles.title2].join(' ')}>Login</h2>
        <p className={styles.login__caption}>Please enter your e-mail and password:</p>
        <form className={styles.login__form} action="">
          {email.isInvalid() && <ValidationError message={email.validation.message}/>}
          <Input 
            value={email.value}
            onChange={(event) => email.onChange(event)}
            onBlur={email.onBlur}
            type="email"
            style={{
              input: {width: '400px', marginBottom: '15px'}
            }}
            placeholder={'Email'}
          />
          {password.isInvalid() && <ValidationError message={password.validation.message}/>}
          <Input
            value={password.value}
            onChange={(event) => password.onChange(event)}
            onBlur={password.onBlur}
            type="password"
            style={{
              input: {width: '400px', marginBottom: '15px'}
            }}
            placeholder={'Password'}
          />
          <Button2 disabled={isValidForm()} onClick={(event) => login(event)}>
            {/* <NavLink to='/'> */}
              Login
            {/* </NavLink> */}
          </Button2>
        </form>
        <div className={styles.login__create}>
          <span>Don't have an account? </span>
          <NavLink to="/registration">Create one</NavLink>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;