import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.navBar}>
          <div className={styles.navBar__logo}>
          
          </div>
          <ul className={styles.list}>
            <li className={styles.item}><a href="#" className={styles.link}>Men's</a></li>
            <li className={styles.item}><a href="#" className={styles.link}>Woman's</a></li>
            <li className={styles.item}><a href="#" className={styles.link}>Kid's</a></li>
            <li className={styles.item}><a href="#" className={styles.link}>Sale</a></li>
            <li className={styles.item}><a href="#" className={styles.link}>Contacts</a></li>
          </ul>
        </div>
        <div className={styles.userBar}>
          <ul className={styles.list}>
            <li className={styles.item}><a href="#" className={styles.link}>Account</a></li>
            <li className={styles.item}><a href="#" className={styles.link}>Search</a></li>
            <li className={styles.item}><a href="#" className={styles.link}>Cart</a></li>
          </ul>
          <div className={styles.btn}>
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;