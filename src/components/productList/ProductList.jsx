import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/productCard/ProductCard';
import styles from './ProductList.module.scss';

const ProductList = ({productCards}) => {
  const itemsPerPage = 4;
  const [activePage, setActivePage] = useState(0);
  const [firstIndex, setFirstIndex] = useState(0);
  const [lastIndex, setLastIndex]= useState(itemsPerPage);
  const currentItems = productCards.slice(firstIndex, lastIndex); 
  const pageCount = Math.ceil(productCards.length / itemsPerPage);

  const changePage = (page) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setFirstIndex(page * itemsPerPage);
    setLastIndex((page + 1) * itemsPerPage);
    setActivePage(page);
  }

  useEffect(() => {
    changePage(0);
  }, [productCards]);

  return (
    <div className={styles.products}>
      <div className={styles.products__wrapper}>
        {currentItems.map((item) => {
          return (
            <Link to={`/${item.id}`} key={item.id} style={{margin: '30px'}}>
              <ProductCard imgUrl={item.img_urls[0]} brand={item.brand} model={item.model} price={item.price} />
            </Link>
          )
        })}
      </div>
      <ul className={styles.pagination}>
        <li
          className={styles.pagination__btn} 
          onClick={() => {
            if(activePage > 0) changePage(activePage - 1);
          }}
        >
          <svg viewBox="0 0 100 100">
            <path d="M 20,50 L 60,90 L 60,85 L 25,50  L 60,15 L 60,10 Z"></path>
          </svg>
        </li>
        {[...new Array(pageCount)].map((_, i) => {
          return (
            <li key={i}>
              <input 
                checked={i === activePage ? true : false}
                type="radio"
                name="pagination"
                id={'pagination' + i}
                className={styles.pagination__item}
                onChange={() => changePage(i)}
              />
              <label htmlFor={'pagination' + i}>{i + 1}</label>
            </li>
          )
        })}
        <li
          className={styles.pagination__btn} 
          onClick={() => {
            if(activePage < pageCount - 1) changePage(activePage + 1);
          }}
        >
          <svg viewBox="0 0 100 100">
            <path d="M 20,50 L 60,90 L 60,85 L 25,50  L 60,15 L 60,10 Z" transform="translate(100, 100) rotate(180) "></path>
          </svg>
        </li>
      </ul>
    </div>
  );
};

export default ProductList;