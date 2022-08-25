import React from 'react';
import Button2 from '../../components/button/Button2';
import Input from '../../components/input/Input';
import styles from './Register.module.scss';

const Register = () => {
  return (
    <main className={[styles.registerWrapper, styles.main].join(' ')}>
      <div className={styles.register}>
        <h2 className={[styles.register__title, styles.title2].join(' ')}>Register</h2>
        <p className={styles.register__caption}>Please fill in the information below:</p>
        <form className={styles.register__form} action="">
          <Input style={{width: '400px', marginBottom: '15px'}} placeholder={'First name'}/>
          <Input style={{width: '400px', marginBottom: '15px'}} placeholder={'Last name'}/>
          <Input style={{width: '400px', marginBottom: '15px'}} placeholder={'Email'}/>
          <Input style={{width: '400px', marginBottom: '15px'}} placeholder={'Password'}/>
          <Button2>Create my account</Button2>
        </form>
      </div>
    </main>
  );
};

export default Register;