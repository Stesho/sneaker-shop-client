import React, { useEffect, useState } from 'react';
import styles from './Collection.module.scss';
import Select from '../../components/select/Select.jsx';
import ProductCard from '../../components/productCard/ProductCard';
import Filter from '../../components/filter/Filter';
import useSort from '../../hooks/useSort';

//TODO: Loader
//TODO: No products
//TODO: Use scss variables for width and other

const Collection = ({title, products}) => {
  const [productCards, setProductCards] = useState(products);
  const options = useSort(productCards, setProductCards);

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
        <Select options={options} onChange={(option) => option.sortFunc()}/>
      </div>
      <div className={styles.content}>
        <Filter products={products} setProductCards={setProductCards}/>
        <div className={styles.productsWrapper}>
          {productCards.map((item) => {
            return (
              <ProductCard imgUrl={item.imgUrl} brand={item.brand} model={item.model} price={item.price} key={item.id}/>
            )
          })}  
        </div>
      </div>
    </main>
  );
};

export default Collection;