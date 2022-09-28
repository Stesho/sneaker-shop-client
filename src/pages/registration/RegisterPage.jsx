import React from 'react';
import axios from 'axios';
import Button2 from '../../components/button/Button2';
import Input from '../../components/input/Input';
import styles from './RegisterPage.module.scss';
import useInput from '../../hooks/useInput';

const RegisterPage = () => {
  const validationMessages = {
    notEmpty: "Filed can't be empty",
    isEmail: 'Incorrect email',
    isPassword: 'Password must contain at least 1 letter and 1 number',
  }
  const name = useInput(
    '',
    {length: {min: 1, max: 40}, notEmpty: true},
    {...validationMessages, length: 'Field must contain from 1 to 40 symbols'},
  );
  const surname = useInput(
    '',
    {length: {min: 1, max: 40}, notEmpty: true},
    {...validationMessages, length: 'Field must contain from 1 to 40 symbols'},
  );
  const email = useInput(
    '',
    {isEmail: true, notEmpty: true},
    validationMessages,
  );
  const password = useInput(
    '',
    {isPassword: true, length: {min: 8, max: 40}, notEmpty: true},
    {...validationMessages, length: 'Field must contain from 8 to 40 symbols'},
  );

  const registration = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/user', {
        name: name.value,
        surname: surname.value,
        email: email.value,
        password: password.value
      });
    }
    catch (err) {
      console.log(err);
    }
  }

  const isError = (input) => {
    return input.isDirty && input.validation.isError();
  }

  return (
    <main className={[styles.registerWrapper, styles.main].join(' ')}>
      <div className={styles.register}>
        <h2 className={[styles.register__title, styles.title2].join(' ')}>Register</h2>
        <p className={styles.register__caption}>Please fill in the information below:</p>
        <form className={styles.register__form} action="">
          {isError(name) && <div>{name.validation.message}</div>}
          <Input 
            value={name.value}
            onChange={(event) => name.onChange(event)}
            onBlur={name.onBlur}
            type="text"
            style={{
              input: {width: '400px', marginBottom: '15px'}
            }}
            placeholder={'First name'}
          />
          {isError(surname) && <div>{surname.validation.message}</div>}
          <Input 
            value={surname.value}
            onChange={(event) => surname.onChange(event)}
            onBlur={surname.onBlur}
            type="text"
            style={{
              input: {width: '400px', marginBottom: '15px'}
            }}
            placeholder={'Last name'}
          />
          {isError(email) && <div>{email.validation.message}</div>}
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
          {isError(password) && <div>{password.validation.message}</div>}
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
          <Button2 onClick={() => registration()}>Create my account</Button2>
        </form>
      </div>
    </main>
  );
};

export default RegisterPage;