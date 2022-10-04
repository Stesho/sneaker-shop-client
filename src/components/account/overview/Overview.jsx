import React from 'react';
import styles from './Overview.module.scss';
import Input from '../../input/Input';
import Button2 from '../../button/Button2';

const Overview = (user) => {
  return (
    <div className={styles.overview}>
      <div className={styles.overview__icon}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M10 2a4 4 0 100 8 4 4 0 000-8zm0 10a6 6 0 110-12 6 6 0 010 12zm7.678 8L19 18.468a6.809 6.809 0 00-.207-.468H.207c-.075.154-.144.31-.207.468L1.322 20h.282c.564-2.792 3.814-5 7.896-5s7.332 2.208 7.896 5h.282zM0 20h20c-.553-4.006-4.819-7-10-7S.553 15.994 0 20z"/>
        </svg>
      </div>
      <h2 className={styles.overview__title}>
        Account Overview
      </h2>
      <p className={styles.overview__caption}>
        Feel free to edit any of your details below so your Atmos account is totally up to date.       
      </p>
      <form className={styles.overview__form} action="">
        <Input className={styles.overview__input} value={user.name} placeholder='name' />
        <Input className={styles.overview__input} value={user.surname} placeholder='surname' />
        <Input className={styles.overview__input} value={user.email} placeholder='email' />
        <Button2 className={styles.overview__button}>Save changes</Button2>
      </form>
    </div>
  );
};

export default Overview;