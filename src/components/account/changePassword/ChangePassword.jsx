import { React, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserProps } from '../../../store/userSlice';
import axios from 'axios';
import Button2 from '../../button/Button2';
import Input from '../../input/Input';
import styles from './ChangePassword.module.scss';

const ChangePassword = () => {
  const user = useSelector(state => state.user);
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [requestErrorMessage, setRequestErrorMessage] = useState('');
  const dispatch = useDispatch();

  const savePassword = async (event) => {
    event.preventDefault();
    if(password !== user.props.password) {
      setRequestErrorMessage('Invalid password');
      return;
    }
    const newUser = {
      name: user.props.name,
      surname: user.props.surname,
      email: user.props.email,
      password: newPassword,
    }
    try {
      const response = await axios.put(`http://localhost:3001/auth/user/${user.props.id}`, newUser);
      dispatch(setUserProps(newUser));
    }
    catch (err) {
      console.log(err);
    }
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
        <Input
          className={styles.changePass__input}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder='current password'
          type='password'
          />
        <span className={styles.changePass__label}>New password:</span>
        <Input
          className={styles.changePass__input}
          value={newPassword}
          onChange={(event) => setNewPassword(event.target.value)}
          placeholder='new password'
          type='password'
        />
        <Button2
          className={styles.changePass__button}
          onClick={(event) => savePassword(event)}
        >
          Save password
        </Button2>
      </form>
    </div>
  );
};

export default ChangePassword;