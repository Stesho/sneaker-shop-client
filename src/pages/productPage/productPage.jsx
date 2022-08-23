import React from 'react';
import styles from './productPage.module.scss';

const productPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.img}>
        <img src="" alt="" />
      </div>
      <div className={styles.description}>
        <span className={styles.description__brand}></span>
        <span className={styles.description__model}></span>
        <span className={styles.description__sku}></span>
        <span className={styles.description__price}></span>
        <ul className={styles.description__sizes}>

        </ul>
        <button className={styles.description__addToCard}></button>
      </div>
    </main>
  );
};

export default productPage;