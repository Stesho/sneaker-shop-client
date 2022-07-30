import React from 'react';
import styles from './HomePage.module.scss';
import BrandCard from '../../components/brandCard/BrandCard';

const HomePage = () => {
  return (
    <div className={styles.home}>
      <main className={styles.main}>
        <div className={styles.slideShow}>
          <img src={require('../../assets/img/homePage/slide1.jpg')} alt="sneakers" className={styles.slideShow__slide}/>
        </div>
        <div className={styles.container}>
          <div className={styles.brands}>
            
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
