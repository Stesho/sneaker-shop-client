import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import useTheme from '../../hooks/useTheme';
import styles from './Header.module.scss';

const Header = () => {
  const cart = useSelector(state => state.cart);
  const [theme, toggleTheme] = useTheme();

  const setActive = ({isActive}) => {
    return isActive ? [styles.active, styles.link].join(' ') : styles.link;
  }

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
          <div className={styles.themeSwitcherWrapper}>
            <div className={styles.themeSwitcherCaption}>Theme</div>
            <label className={styles.themeSwitcher}>
              <input
                type="checkbox"
                onChange={(event) => toggleTheme(event.target.checked)}
                checked={theme === 'dark' ? true : false}
              />
              <div className={styles.themeSwitcher__btn} />
              {/* <span className={styles.themeSwitcher__btn}></span> */}
            </label>
          </div>
          <ul className={styles.list}>
            <li className={styles.item}><NavLink to="/account" className={styles.link}>Account</NavLink></li>
            <li className={styles.item}><a href="#" className={styles.link}>Search</a></li>
            <li className={styles.item}>
              <NavLink to="/cart" className={styles.link}>Cart ({cart.products.length})</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;