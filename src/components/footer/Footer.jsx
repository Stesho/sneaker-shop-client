import React from 'react';
import styles from './Footer.module.scss';
import Button2 from '../button/Button2';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.follow}>
            <h3 className={[styles.follow__header, styles.title3].join(' ')}>Follow us</h3>
            <ul className={[styles.follow__list, styles.list].join(' ')}>
              <li>
                <a className={styles.follow__link} rel="noreferrer" href="https://www.facebook.com/AtmosUSA" target="_blank">
                  <svg viewBox="0 0 9 17">
                    <path d="M5.842 17V9.246h2.653l.398-3.023h-3.05v-1.93c0-.874.246-1.47 1.526-1.47H9V.118C8.718.082 7.75 0 6.623 0 4.27 0 2.66 1.408 2.66 3.994v2.23H0v3.022h2.66V17h3.182z"></path>
                  </svg>
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a className={styles.follow__link} rel="noreferrer" href="https://twitter.com/atmos_usa" target="_blank">
                  <svg viewBox="0 0 32 26">
                    <path d="M32 3.077c-1.1748.525-2.4433.8748-3.768 1.031 1.356-.8123 2.3932-2.0995 2.887-3.6305-1.2686.7498-2.6746 1.2997-4.168 1.5934C25.751.796 24.045.0025 22.158.0025c-3.6242 0-6.561 2.937-6.561 6.5612 0 .5124.0562 1.0123.1686 1.4935C10.3104 7.7822 5.474 5.1702 2.237 1.196c-.5624.9687-.8873 2.0997-.8873 3.2994 0 2.2746 1.156 4.2867 2.9182 5.4615-1.075-.0314-2.0872-.3313-2.9745-.8187v.0812c0 3.1806 2.262 5.8363 5.2677 6.4362-.55.15-1.131.2312-1.731.2312-.4248 0-.831-.0438-1.2372-.1188.8374 2.6057 3.262 4.5054 6.13 4.5616-2.2495 1.7622-5.074 2.812-8.1546 2.812-.531 0-1.0498-.0313-1.5684-.0938 2.912 1.8684 6.3613 2.9494 10.0668 2.9494 12.0726 0 18.6776-10.0043 18.6776-18.6776 0-.2874-.0063-.5686-.0188-.8498C30.0066 5.5514 31.119 4.3954 32 3.077z"></path>
                  </svg>
                  <span>Twitter</span>
                </a>
              </li>
              <li>
                <a className={styles.follow__link} rel="noreferrer" href="https://www.instagram.com/atmos_usa" target="_blank">
                  <svg viewBox="0 0 32 32">
                    <path d="M15.994 2.886c4.273 0 4.775.019 6.464.095 1.562.07 2.406.33 2.971.552.749.292 1.283.635 1.841 1.194s.908 1.092 1.194 1.841c.216.565.483 1.41.552 2.971.076 1.689.095 2.19.095 6.464s-.019 4.775-.095 6.464c-.07 1.562-.33 2.406-.552 2.971-.292.749-.635 1.283-1.194 1.841s-1.092.908-1.841 1.194c-.565.216-1.41.483-2.971.552-1.689.076-2.19.095-6.464.095s-4.775-.019-6.464-.095c-1.562-.07-2.406-.33-2.971-.552-.749-.292-1.283-.635-1.841-1.194s-.908-1.092-1.194-1.841c-.216-.565-.483-1.41-.552-2.971-.076-1.689-.095-2.19-.095-6.464s.019-4.775.095-6.464c.07-1.562.33-2.406.552-2.971.292-.749.635-1.283 1.194-1.841s1.092-.908 1.841-1.194c.565-.216 1.41-.483 2.971-.552 1.689-.083 2.19-.095 6.464-.095zm0-2.883c-4.343 0-4.889.019-6.597.095-1.702.076-2.864.349-3.879.743-1.054.406-1.943.959-2.832 1.848S1.251 4.473.838 5.521C.444 6.537.171 7.699.095 9.407.019 11.109 0 11.655 0 15.997s.019 4.889.095 6.597c.076 1.702.349 2.864.743 3.886.406 1.054.959 1.943 1.848 2.832s1.784 1.435 2.832 1.848c1.016.394 2.178.667 3.886.743s2.248.095 6.597.095 4.889-.019 6.597-.095c1.702-.076 2.864-.349 3.886-.743 1.054-.406 1.943-.959 2.832-1.848s1.435-1.784 1.848-2.832c.394-1.016.667-2.178.743-3.886s.095-2.248.095-6.597-.019-4.889-.095-6.597c-.076-1.702-.349-2.864-.743-3.886-.406-1.054-.959-1.943-1.848-2.832S27.532 1.247 26.484.834C25.468.44 24.306.167 22.598.091c-1.714-.07-2.26-.089-6.603-.089zm0 7.778c-4.533 0-8.216 3.676-8.216 8.216s3.683 8.216 8.216 8.216 8.216-3.683 8.216-8.216-3.683-8.216-8.216-8.216zm0 13.549c-2.946 0-5.333-2.387-5.333-5.333s2.387-5.333 5.333-5.333 5.333 2.387 5.333 5.333-2.387 5.333-5.333 5.333zM26.451 7.457c0 1.059-.858 1.917-1.917 1.917s-1.917-.858-1.917-1.917c0-1.059.858-1.917 1.917-1.917s1.917.858 1.917 1.917z"></path>
                  </svg>
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a className={styles.follow__link} rel="noreferrer" href="https://www.youtube.com/channel/UCUnj5vzXsFFcewjRSTlgFWg" target="_blank">
                  <svg viewBox="0 0 33 32">
                    <path d="M0 25.693q0 1.997 1.318 3.395t3.209 1.398h24.259q1.891 0 3.209-1.398t1.318-3.395V6.387q0-1.997-1.331-3.435t-3.195-1.438H4.528q-1.864 0-3.195 1.438T.002 6.387v19.306zm12.116-3.488V9.876q0-.186.107-.293.08-.027.133-.027l.133.027 11.61 6.178q.107.107.107.266 0 .107-.107.213l-11.61 6.178q-.053.053-.107.053-.107 0-.16-.053-.107-.107-.107-.213z"></path>
                  </svg>
                  <span>YouTube</span>
                </a>
              </li>
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
        <div className={styles.author}>
          &copy; Steshenko Dmitry, 2022
        </div>
      </div>
    </div>
  );
};

export default Footer;