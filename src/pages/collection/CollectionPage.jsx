import React, { useEffect, useState } from 'react';
import styles from './CollectionPage.module.scss';
import Select from '../../components/select/Select.jsx';
import Filter from '../../components/filter/Filter';
import useSort from '../../hooks/useSort';
import ProductList from '../../components/productList/ProductList';

//TODO: Loader
//TODO: Use scss variables for width and other
//TODO: NotFound page
//TODO: close modal on overlay click
//TODO: modal sizes table

const CollectionPage = ({title, products}) => {
  const [productCards, setProductCards] = useState(products);
  const options = useSort(setProductCards);

  useEffect(() => {
    setProductCards(products);
  }, [products]);

  return (
    <main className={styles.main}>
      <h2 className={[styles.title, styles.title2].join(' ')}>{title}</h2>
      <div className={styles.toolbar}>
        <div className={styles.toolbar__layoutSwitcher}>
          <button className={styles.toolbar__switcher}>
            <svg viewBox="0 0 36 36">
              <path d="M21 36V21h15v15H21zm0-36h15v15H21V0zM0 21h15v15H0V21zM0 0h15v15H0V0z" />
            </svg>
          </button>
          <button className={styles.toolbar__switcher}>
            <svg viewBox="0 0 36 36">
              <path d="M28 36v-8h8v8h-8zm0-22h8v8h-8v-8zm0-14h8v8h-8V0zM14 28h8v8h-8v-8zm0-14h8v8h-8v-8zm0-14h8v8h-8V0zM0 28h8v8H0v-8zm0-14h8v8H0v-8zM0 0h8v8H0V0z" />
            </svg>
          </button>
        </div>
        <Select
          options={options}
          onChange={(option) => option.sortFunc()}
          caption="Sort"
          style={{
            select__btn: {borderTop: 'none', borderBottom: 'none'},
            select__list: {borderTop: '1px solid #d0d0d0'}
          }}
        />
      </div>
      <div className={styles.content}>
        <Filter products={products} setProductCards={setProductCards}/>
        {productCards.length > 0 
          ? <ProductList productCards={productCards}/>
          : <div className={styles.noProducts}>
              Selected products are missing
            </div>
        } 
      </div>
    </main>
  );
};

export default CollectionPage;