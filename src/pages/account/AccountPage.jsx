import { React, useEffect } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import styles from './AccountPage.module.scss';
import cookies from '../../services/cookies';
import { useDispatch, useSelector } from 'react-redux';
import { clearOrders, setIsAuth } from '../../store/userSlice';

const AccountPage = () => {
  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const setActive = ({isActive}) => {
    return isActive ? [styles.active, styles.navigation__link].join(' ') : styles.navigation__link;
  }

  const signOut = () => {
    cookies.deleteCookie('token');

    dispatch(setIsAuth(false));
    dispatch(clearOrders());

    navigate('/login');
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  }, []);

  return (
    <main className={styles.main}>
      <h2 className={[styles.pageTitle, styles.title2].join(' ')}>My account</h2>
      <div className={[styles.account, styles.account__content].join(' ')}>
        <nav className={styles.navigation}>
          {/* <span>Welcom back, Name</span> */}
          <ul className={styles.navigation__list}>
            <li className={styles.navigation__item}>
              <NavLink to='/account/overview' className={setActive}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M10 2a4 4 0 100 8 4 4 0 000-8zm0 10a6 6 0 110-12 6 6 0 010 12zm7.678 8L19 18.468a6.809 6.809 0 00-.207-.468H.207c-.075.154-.144.31-.207.468L1.322 20h.282c.564-2.792 3.814-5 7.896-5s7.332 2.208 7.896 5h.282zM0 20h20c-.553-4.006-4.819-7-10-7S.553 15.994 0 20z"/>
                </svg>
                <span>Account overview</span>
              </NavLink>
            </li>
            <li className={styles.navigation__item}>
              <NavLink to='/account/my-orders' className={setActive}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <g fillRule="evenodd">
                    <path fillRule="nonzero" d="M18 4.667L16 2H4L2 4.667V18h16V4.667zM0 4l3-4h14l3 4v16H0V4z"/>
                    <path d="M0 4h20v2H0z"/>
                    <path d="M9 1.111h2v4H9z"/>
                  </g>
                </svg>
                <span>My orders</span>
              </NavLink>
            </li>
            <li className={styles.navigation__item}>
              <NavLink to='/account/change-password' className={setActive}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 20">
                  <g fillRule="evenodd">
                    <path d="M16 7h-3V5c0-2.8-2.2-5-5-5S3 2.2 3 5v2H0v13h16V7zm-4.9 0H4.9V5c0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1v2zM2 9h12v9H2V9z"/>
                    <ellipse cx="8" cy="13.5" rx="2" ry="2.5"/>
                  </g>
                </svg>
                <span>Change password</span>
              </NavLink>
            </li>
            <li className={styles.navigation__item}>
              <NavLink to='/' className={styles.navigation__link}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <g fillRule="evenodd">
                    <path fillRule="nonzero" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 18C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"/>
                    <path d="M9 8.505v6h2v-6H9zM9 6c0 .548.452 1 1 1s1-.452 1-1-.452-1-1-1-1 .452-1 1z"/>
                  </g>
                </svg>
                <span>Need help?</span>
              </NavLink>
            </li>
            <li className={styles.navigation__item}>
              <div className={styles.navigation__link} onClick={() => signOut()}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 17">
                  <g fillRule="evenodd">
                    <path d="M19.965.1v16.8h-9.441v-2.067h7.388s.04-12.689 0-12.689h-7.388V.1h9.441z"/>
                    <path d="M2.143 9.55v-2.1h11.524v2.1z"/>
                    <path d="M1.525 10.034l-.002.002L.042 8.554l.001-.001-.001-.002L1.523 7.07l.002.001 3.714-3.714L6.721 4.84 3.007 8.553l3.714 3.714-1.482 1.481-3.714-3.714z"/>
                  </g>
                </svg>
                <span>Sign out</span>
              </div>
            </li>
          </ul>
        </nav>
        <Outlet/>
      </div>
    </main>
  );
};

export default AccountPage;