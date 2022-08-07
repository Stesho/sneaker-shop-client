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
            <li className={styles.item}><a href="#" className={styles.link}>mens</a></li>
            <li className={styles.item}><a href="#" className={styles.link}>womans</a></li>
            <li className={styles.item}><a href="#" className={styles.link}>kids</a></li>
            <li className={styles.item}><a href="#" className={styles.link}>sale</a></li>
            <li className={styles.item}><a href="#" className={styles.link}>contacts</a></li>
          </ul>
        </div>
        <div className={styles.userBar}>
          <ul className={styles.list}>
            <li className={styles.item}><a href="#" className={styles.link}>account</a></li>
            <li className={styles.item}><a href="#" className={styles.link}>search</a></li>
            <li className={styles.item}><a href="#" className={styles.link}>cart</a></li>
          </ul>
          <div className={styles.btn}>
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;