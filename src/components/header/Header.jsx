import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import useTheme from '../../hooks/useTheme';
import styles from './Header.module.scss';

const Header = () => {
  const setActive = ({isActive}) => isActive ? [styles.active, styles.link].join(' ') : styles.link;
  const [theme, setTheme] = useTheme();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <div className={styles.navbar__logo}>
            <NavLink to='/'><img src={require('../../assets/img/homePage/logo.jpg')} alt="Atmos logo" /></NavLink>
          </div>
          <ul className={styles.list}>
            <li className={styles.item}><NavLink to="/" className={setActive}>New arrivals</NavLink></li>
            <li className={styles.item}><NavLink to="/" className={setActive}>Brands</NavLink></li>
            <li className={styles.item}><NavLink to="/mens" className={setActive}>Men's</NavLink></li>
            <li className={styles.item}><NavLink to="/womans" className={setActive}>Women's</NavLink></li>
            <li className={styles.item}><a href="#footer" className={styles.link}>Contacts</a></li>
          </ul>
        </div>
        <div className={styles.userbar}>
          <label className={styles.themeSwitcher}>
            <input type="checkbox" onChange={(event) => event.target.checked ? setTheme('dark') : setTheme('light')}/>
            <span className={styles.themeSwitcher__btn}></span>
          </label>
          <ul className={styles.list}>
            <li className={styles.item}><NavLink to="/login" className={styles.link}>Account</NavLink></li>
            <li className={styles.item}><a href="#" className={styles.link}>Search</a></li>
            <li className={styles.item}><a href="#" className={styles.link}>Cart</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;