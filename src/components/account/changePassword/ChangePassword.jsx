import { React, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserProps } from '../../../store/userSlice';
import ValidationError from '../../validationError/ValidationError';
import useInput from '../../../hooks/useInput';
import axios from 'axios';
import Button2 from '../../button/Button2';
import Input from '../../input/Input';
import styles from './ChangePassword.module.scss';

const ChangePassword = () => {
  const validationMessages = {
    notEmpty: "Filed can't be empty",
    length: 'Field must contain from 1 to 40 symbols',
    isPassword: 'Password must contain at least 1 letter and 1 number',
  }
  const user = useSelector(state => state.user);
  const password = useInput('', {isPassword: true, length: {min: 8, max: 40}, notEmpty: true}, validationMessages);
  const newPassword = useInput('', {isPassword: true, length: {min: 8, max: 40}, notEmpty: true}, validationMessages);
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [requestErrorMessage, setRequestErrorMessage] = useState('');
  const dispatch = useDispatch();

  const savePassword = async (event) => {
    event.preventDefault();
    if(password.value !== user.props.password) {
      setRequestErrorMessage('Invalid password');
      return;
    }
    const newUser = {
      name: user.props.name,
      surname: user.props.surname,
      email: user.props.email,
      password: newPassword.value,
    }
    try {
      const response = await axios.put(`http://localhost:3001/auth/user/${user.props.id}`, newUser);
      dispatch(setUserProps(newUser));
    }
    catch (err) {
      console.log(err);
    }
  }

  const isValidForm = () => {
    return password.validation.isError() ||
           newPassword.validation.isError();
  }

  return (
    <div className={styles.changePass}>
      <div className={styles.changePass__icon}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 20">
          <g fillRule="evenodd">
            <path d="M16 7h-3V5c0-2.8-2.2-5-5-5S3 2.2 3 5v2H0v13h16V7zm-4.9 0H4.9V5c0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1v2zM2 9h12v9H2V9z"/>
            <ellipse cx="8" cy="13.5" rx="2" ry="2.5"/>
          </g>
        </svg>
      </div>
      <h2 className={styles.changePass__title}>Change password</h2>
      <p className={styles.changePass__caption}>
        Feel free to update your password so your Atmos account stays secure.
      </p>
      <form className={styles.changePass__form} action="">
        <div style={{display: requestErrorMessage ? 'block' : 'none'}} className={styles.changePass__requestError}>
          {requestErrorMessage}
        </div>
        <span className={styles.changePass__label}>Current password:</span>
        {password.isInvalid() && <ValidationError message={password.validation.message}/>}
        <div className={styles.changePass__inputWrapper}>
          <Input
            className={styles.changePass__input}
            value={password.value}
            onChange={(event) => password.onChange(event)}
            onFocus={password.onFocus}
            placeholder='current password'
            type={showPassword ? 'text' : 'password'}
          />
          <div className={styles.changePass__showPassword} onClick={() => setShowPassword(state => !state)}>
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
        <span className={styles.changePass__label}>New password:</span>
        {newPassword.isInvalid() && <ValidationError message={newPassword.validation.message}/>}
        <div className={styles.changePass__inputWrapper}>
          <Input
            className={styles.changePass__input}
            value={newPassword.value}
            onChange={(event) => newPassword.onChange(event)}
            onFocus={newPassword.onFocus}
            placeholder='new password'
            type={showNewPassword ? 'text' : 'password'}
          />
          <div className={styles.changePass__showPassword} onClick={() => setShowNewPassword(state => !state)}>
            {
              showNewPassword
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
        <Button2
          className={styles.changePass__button}
          onClick={(event) => savePassword(event)}
          disabled={isValidForm()}
        >
          Save password
        </Button2>
      </form>
    </div>
  );
};

export default ChangePassword;