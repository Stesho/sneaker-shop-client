import React, { useRef } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import useTheme from '../../hooks/useTheme';
import styles from './Header.module.scss';

const Header = () => {
  const [theme, toggleTheme] = useTheme();
  const toggleBtn = useRef();

  const setActive = ({isActive}) => {
    return isActive ? [styles.active, styles.link].join(' ') : styles.link;
  }

  useEffect(() => {
    toggleBtn.current.checked = theme === 'dark' ? true : false;
  }, [theme]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <h1 className={styles.navbar__logo}>
            <NavLink to='/'><img src={require('../../assets/img/homePage/logo.jpg')} alt="Atmos logo" /></NavLink>
          </h1>
          <ul className={styles.list}>
            <li className={styles.item}><NavLink to="/newarrivals" className={setActive}>New arrivals</NavLink></li>
            <li className={styles.item}><NavLink to="/brands" className={setActive}>Brands</NavLink></li>
            <li className={styles.item}><NavLink to="/mens" className={setActive}>Men's</NavLink></li>
            <li className={styles.item}><NavLink to="/womans" className={setActive}>Women's</NavLink></li>
            <li className={styles.item}><a href="#footer" className={styles.link}>Contacts</a></li>
          </ul>
        </div>
        <div className={styles.userbar}>
          <label className={styles.themeSwitcher}>
            <input ref={toggleBtn} type="checkbox" onChange={(event) => toggleTheme(event.target.checked)}/>
            <span className={styles.themeSwitcher__btn}></span>
          </label>
          <ul className={styles.list}>
            <li className={styles.item}><NavLink to="/account/overview" className={styles.link}>Account</NavLink></li>
            <li className={styles.item}><a href="#" className={styles.link}>Search</a></li>
            <li className={styles.item}><a href="#" className={styles.link}>Cart</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;