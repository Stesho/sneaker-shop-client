import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setIsAuth, setUserProps } from '../../store/userSlice';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import cookies from '../../services/cookies';
import Button2 from '../../components/button/Button2';
import Input from '../../components/input/Input';
import ValidationError from '../../components/validationError/ValidationError';

import styles from './LoginPage.module.scss';

const LoginPage = () => {
  const validationMessages = {
    notEmpty: "Filed can't be empty",
    length: 'Field must contain from 8 to 40 symbols',
    isEmail: 'Incorrect email',
    isPassword: 'Password must contain at least 1 letter and 1 number',
  }
  const email = useInput('', {isEmail: true, notEmpty: true}, validationMessages);
  const password = useInput('', {isPassword: true, length: {min: 8, max: 40}, notEmpty: true}, validationMessages);
  const [requestErrorMessage, setRequestErrorMessage] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isValidForm = () => {
    return email.validation.isError() || password.validation.isError();
  }

  const login = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/auth/login', {
        email: email.value,
        password: password.value,
      });

      cookies.setCookie('token', response.data.token);

      dispatch(setIsAuth(true));
      dispatch(setUserProps(response.data.user));

      navigate('/account');
    }
    catch(err) {
      console.log(err);
      setRequestErrorMessage(err.response.data.message);
    }
  }

  return (
    <main className={[styles.main, styles.loginWrapper].join(' ')}>
      <div className={styles.login}>
        <h2 className={[styles.login__title, styles.title2].join(' ')}>Login</h2>
        <p className={styles.login__caption}>Please enter your e-mail and password:</p>
        <form className={styles.login__form} action="">
          <div style={{display: requestErrorMessage ? 'block' : 'none'}} className={styles.login__requestError}>
            {requestErrorMessage}
          </div>
          {email.isInvalid() && <ValidationError message={email.validation.message}/>}
          <Input 
            value={email.value}
            onChange={(event) => email.onChange(event)}
            onFocus={email.onFocus}
            type="email"
            className={styles.login__input}
            placeholder={'Email'}
            />
          {password.isInvalid() && <ValidationError message={password.validation.message}/>}
          <Input
            value={password.value}
            onChange={(event) => password.onChange(event)}
            onFocus={password.onFocus}
            type="password"
            className={styles.login__input}
            placeholder={'Password'}
          />
          <Button2 disabled={isValidForm()} onClick={(event) => login(event)}>
            Login
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