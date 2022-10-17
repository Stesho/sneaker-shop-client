import React, { useState, useRef } from 'react';
import useFilter from '../../hooks/useFilter';
import DoubleRangeInput from '../../components/doubleRangeInput/DoubleRangeInput';
import Button2 from '../../components/button/Button2';
import styles from './Filter.module.scss';
import { useEffect } from 'react';

const Filter = ({products, setProductCards}) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(300);
  const [filterItems, addToFilter, setDefaultFilter] = useFilter(products, setProductCards);
  const brandCheckbox = useRef();
  const sizeCheckbox = useRef(); 
  const minSize = 35;
  const maxSize = 48;
  const sizes = [...new Array(2 * (maxSize - minSize) + 1)].map((_, index) => minSize + index/2);
  const [brandNames, setBrandNames] = useState([
    {id: 1, brand: 'Adidas'},
    {id: 2, brand: 'Asics'},
    {id: 3, brand: 'Converse'},
    {id: 4, brand: 'Jordan'},
    {id: 5, brand: 'New balance'},
    {id: 6, brand: 'Nike'},
    {id: 7, brand: 'Puma'},
    {id: 8, brand: 'Reebok'},
    {id: 9, brand: 'Saucony'},
  ]);

  const resetFilter = () => {
    setDefaultFilter();
    setMinPrice(0);
    setMaxPrice(300);
    brandCheckbox.current.querySelectorAll('input').forEach((item) => {
      item.checked = false;
    });
    sizeCheckbox.current.querySelectorAll('input').forEach((item) => {
      item.checked = false;
    });
  }

  useEffect(() => {
    resetFilter();
  }, [products]);

  return (
    <div className={styles.filter}>
      <div className={styles.filter__title}>
        <svg width="25" height="18" viewBox="0 0 25 18" fill="none">
          <line x1="1.5" y1="1.5" x2="23.5" y2="1.5" strokeWidth="3" strokeLinecap="square"/>
          <line x1="1.5" y1="9" x2="16" y2="9" strokeWidth="3" strokeLinecap="square"/>
          <line x1="1.5" y1="16.5" x2="6.83333" y2="16.5" strokeWidth="3" strokeLinecap="square"/>
        </svg>
        <h3 className={[styles.title3, styles.filter__titleCaption].join(' ')}>Filter</h3>
      </div>
      <div className={styles.filter__price}>
        <h3 className={styles.filter__priceCaption}>Price</h3>
        <DoubleRangeInput
          min={minPrice}
          max={maxPrice}
          setMin={(value) => setMinPrice(value)}
          setMax={(value) => setMaxPrice(value)}
          onChange={(min, max) => {
            addToFilter('minPrice', min);
            addToFilter('maxPrice', max);
          }}/>
      </div>
      <div className={styles.filter__brands}>
        <h3 className={styles.filter__brandsCaption}>Brands</h3>
        <ul ref={brandCheckbox}>
          {brandNames.map((item, i) => {
            return (
              <li key={item.id}>
                <input
                  type="checkbox" 
                  className={styles.filter__brandsCheckbox}
                  id={'brand' + i}
                  name="brand"
                  onChange={() => addToFilter('brands', item.brand)}
                />
                <label htmlFor={'brand' + i}>{item.brand}</label>
              </li>
            )
          })}
        </ul>
      </div>
      <div className={styles.filter__size}>
        <h3 className={styles.filter__sizeCaption}>Size</h3>
        <ul ref={sizeCheckbox} className={styles.filter__sizeList}>
          {sizes.map((item, i) => {
            return (
              <li key={item}>
                <input
                  type="checkbox"
                  className={styles.filter__sizeCheckbox}
                  id={'size' + item}
                  name="size"
                  onChange={() => addToFilter('sizes', item)}
                />
                <label htmlFor={'size' + item}>{item}</label>
              </li>
            )
          })}
        </ul>
      </div>
      <div className={styles.filter__btns}>
        <Button2 className={styles.filter__btn} onClick={() => filterItems()}>Apply</Button2>
        <Button2 className={styles.filter__btn} onClick={() => resetFilter()}>Reset</Button2>
      </div>
    </div>
  );
};

export default Filter;