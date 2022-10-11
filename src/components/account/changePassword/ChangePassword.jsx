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
        <Input
          className={styles.changePass__input}
          value={password.value}
          onChange={(event) => password.onChange(event)}
          onFocus={password.onFocus}
          placeholder='current password'
          type='password'
        />
        <span className={styles.changePass__label}>New password:</span>
        {newPassword.isInvalid() && <ValidationError message={newPassword.validation.message}/>}
        <Input
          className={styles.changePass__input}
          value={newPassword.value}
          onChange={(event) => newPassword.onChange(event)}
          onFocus={newPassword.onFocus}
          placeholder='new password'
          type='password'
        />
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