import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button2 from '../../components/button/Button2';
import Input from '../../components/input/Input';
import styles from './RegisterPage.module.scss';
import useInput from '../../hooks/useInput';
import ValidationError from '../../components/validationError/ValidationError';

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
  const navigate = useNavigate();
  // TODO: const [isRequestError, setIsRequestError] = useState(false);

  const registration = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/auth/registration', {
        name: name.value,
        surname: surname.value,
        email: email.value,
        password: password.value
      });
      navigate('/login');
    }
    catch (err) {
      console.log(err);
    }
  }

  const isValidForm = () => {
    return name.validation.isError() ||
           surname.validation.isError() ||
           email.validation.isError() ||
           password.validation.isError();
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  }, []);

  return (
    <main className={[styles.registerWrapper, styles.main].join(' ')}>
      <div className={styles.register}>
        <h2 className={[styles.register__title, styles.title2].join(' ')}>Register</h2>
        <p className={styles.register__caption}>Please fill in the information below:</p>
        <form className={styles.register__form} action="">
          {/* {isRequestError && <div>This user already exists</div>} */}
          {name.isInvalid() && <ValidationError message={name.validation.message}/>}
          <Input 
            value={name.value}
            onChange={(event) => name.onChange(event)}
            onFocus={name.onFocus}
            type="text"
            className={styles.register__input}
            placeholder={'First name'}
            />
          {surname.isInvalid() && <ValidationError message={surname.validation.message}/>}
          <Input 
            value={surname.value}
            onChange={(event) => surname.onChange(event)}
            onFocus={surname.onFocus}
            type="text"
            className={styles.register__input}
            placeholder={'Last name'}
            />
          {email.isInvalid() && <ValidationError message={email.validation.message}/>}
          <Input
            value={email.value}
            onChange={(event) => email.onChange(event)}
            onFocus={email.onFocus}
            type="email"
            className={styles.register__input}
            placeholder={'Email'}
            />
          {password.isInvalid() && <ValidationError message={password.validation.message}/>}
          <Input
            value={password.value}
            onChange={(event) => password.onChange(event)}
            onFocus={password.onFocus}
            type="password"
            className={styles.register__input}
            placeholder={'Password'}
          />
          <Button2 disabled={isValidForm()} onClick={(event) => registration(event)}>Create my account</Button2>
        </form>
      </div>
    </main>
  );
};

export default RegisterPage;