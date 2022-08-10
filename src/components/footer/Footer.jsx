import React from 'react';
import styles from './Footer.module.scss';
import Button2 from '../button/Button2';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.follow}>
          <h3 className={[styles.follow__header, styles.title3].join(' ')}>Follow us</h3>
          <ul className={[styles.follow__list, styles.list].join(' ')}>
            <li className=""><a href="">Facebook</a></li>
            <li className=""><a href="">Twitter</a></li>
            <li className=""><a href="">Instagram</a></li>
            <li className=""><a href="">YouTube</a></li>
          </ul>
        </div>
        <div className={styles.about}>
          <h3 className={[styles.about__header, styles.title3].join(' ')}>About us</h3>
          <ul className={[styles.about__list, styles.list].join(' ')}>
            <li className="">
              <a href="#">Store location</a>
            </li>
            <li className="">
              <a href="#">About us</a>
            </li>
          </ul>
        </div>
        <div className={styles.contacts}>
          <h3 className={[styles.contacts__header, styles.title3].join(' ')}>Contacts</h3>
          <ul className={[styles.contacts__list, styles.list].join(' ')}>
            <li className="">
              <a href="">Customer Support</a>
            </li>
            <li className="">
              <a href="">Returns</a>
            </li>
            <li className="">
              <a href="">Shipping & FAQ</a>
            </li>
            <li className="">
              <a href="">Privacy Policy</a>
            </li>
            <li className="">
              <a href="">Email Signups</a>
            </li>
          </ul>
        </div>
        <div className={styles.newsLetter}>
          <h3 className={[styles.contacts__header, styles.title3].join(' ')}>Newsletter</h3>
          <form className={styles.newsLetter__form} action="">
            <input className={styles.newsLetter__input} placeholder="Email address" type="text" />
            <input className={styles.newsLetter__input} placeholder="Shoe size" type="text" />
            <Button2>Subscribe</Button2>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;