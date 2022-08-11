import React from 'react';
import styles from './Collection.module.scss';
import products from '../../assets/data/products.json';

const Collection = () => {
  return (
    <div className={styles.collection}>
      <main className={styles.main}>
        <h2 className={[styles.title, styles.title2].join(' ')}>Men's collection</h2>
        <div className={styles.toolbar}>
          <div className={styles.toolbar__layoutSwitcher}>
            <button className={styles.toolbar__switcher}>
              <svg viewBox="0 0 36 36">
                <path d="M21 36V21h15v15H21zm0-36h15v15H21V0zM0 21h15v15H0V21zM0 0h15v15H0V0z"></path>
              </svg>
            </button>
            <button className={styles.toolbar__switcher}>
              <svg viewBox="0 0 36 36">
                <path d="M28 36v-8h8v8h-8zm0-22h8v8h-8v-8zm0-14h8v8h-8V0zM14 28h8v8h-8v-8zm0-14h8v8h-8v-8zm0-14h8v8h-8V0zM0 28h8v8H0v-8zm0-14h8v8H0v-8zM0 0h8v8H0V0z"></path>
              </svg>
            </button>
          </div>
          <div className={styles.toolbar__sort}>
            <div className={styles.toolbar__sortBtn}>
              <span>Sort</span>
              <span className={styles.toolbar__colon}>:</span>
              <span className={styles.toolbar__sortType}>low to high</span>
              <svg viewBox="0 0 19 12">
                <polyline fill="none" points="17 2 9.5 10 2 2" fill-rule="evenodd" stroke-width="2" stroke-linecap="square"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Collection;