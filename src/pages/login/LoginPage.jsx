import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOrder, setIsAuth, setUserProps } from '../../store/userSlice';
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
  const [showPassword, setShowPassword] = useState(false);
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
      const orders = response.data.user.orders.map(item => JSON.parse(item));

      cookies.setCookie('token', response.data.token);
      dispatch(setIsAuth(true));
      dispatch(setUserProps(response.data.user));
      dispatch(addOrder(orders));
      
      navigate('/account');
    }
    catch(err) {
      console.log(err);
      setRequestErrorMessage(err.response.data.message);
    }
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  }, []);

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
          <div className={styles.login__inputWrapper}>
            <Input
              value={password.value}
              onChange={(event) => password.onChange(event)}
              onFocus={password.onFocus}
              type={showPassword ? 'text' : 'password'}
              className={styles.login__input}
              placeholder={'Password'}
            />
            <div className={styles.login__showPassword} onClick={() => setShowPassword(state => !state)}>
              {
                showPassword
                ? <svg viewBox="64 64 896 896" focusable="false" data-icon="eye" aria-hidden="true">
                    <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path>
                  </svg>
                : <svg viewBox="64 64 896 896" focusable="false" data-icon="eye-invisible" aria-hidden="true">
                    <path d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"></path>
                    <path d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"></path>
                  </svg>
              }
            </div>
          </div>
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