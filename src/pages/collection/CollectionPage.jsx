import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './CollectionPage.module.scss';
import Select from '../../components/select/Select.jsx';
import ProductCard from '../../components/productCard/ProductCard';
import Filter from '../../components/filter/Filter';
import useSort from '../../hooks/useSort';

//TODO: Loader
//TODO: Use scss variables for width and other
//TODO: NotFound page

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
        <Select options={options} onChange={(option) => option.sortFunc()}/>
      </div>
      <div className={styles.content}>
        <Filter products={products} setProductCards={setProductCards}/>
        {productCards.length > 0 
          ? <div className={styles.productsWrapper}>
              <div className={styles.products}>
                {productCards.map((item) => {
                return (
                  <Link to={`/${item.id}`} key={item.id} style={{margin: '30px'}}>
                    <ProductCard imgUrl={item.imgUrl} brand={item.brand} model={item.model} price={item.price} />
                  </Link>
                )})}
              </div>
              <div className={styles.pagination}>
                <div className={styles.pagination__item}>1</div>
                <div className={styles.pagination__item}>2</div>
                <div className={styles.pagination__item}>3</div>
                <div className={styles.pagination__item}>4</div>
                <div className={styles.pagination__item}>5</div>
              </div>
            </div>
          : <div className={styles.noProducts}>
              Selected products are missing
            </div>
        } 
      </div>
    </main>
  );
};

export default CollectionPage;