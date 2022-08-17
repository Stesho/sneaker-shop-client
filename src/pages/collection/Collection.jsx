import React, { useEffect, useState } from 'react';
import styles from './Collection.module.scss';
import ProductCard from '../../components/productCard/ProductCard';
import DoubleRangeInput from '../../components/doubleRangeInput/DoubleRangeInput';
import Button2 from '../../components/button/Button2';
import { parseCommandLine } from 'typescript';

//TODO: Loader
//TODO: No products
//TODO: Checkboxes
//TODO: Reset
//TODO: set theme to the local storage

const Collection = ({title, products}) => {
  const [productCards, setProductCards] = useState(products);
  const [brandNames, setBrandNames] = useState([
    {id: 1, brand: 'Adidas'},
    {id: 2, brand: 'Converse'},
    {id: 3, brand: 'New balance'},
    {id: 4, brand: 'Nike'},
    {id: 5, brand: 'Saucony'},
    {id: 6, brand: 'Puma'},
    {id: 7, brand: 'Reebok'},
    {id: 8, brand: 'Jordan'},
  ]);
  const sizes = [35, 35.5, 36, 36.5, 37, 37.5,
                 38, 38.5, 39, 39.5, 40, 40.5,
                 41, 41.5, 42, 42.5, 43, 43.5,
                 44, 44.5, 45, 45.5, 46, 46.5,
                 47, 47.5]; 
  const [filterParam, setFilterParam] = useState({
    minPrice: 0,
    maxPrice: 1000,
    brands: [],
    sizes: [],
  });
  const minSize = 35;
  const maxSize = 47;

  const filterItems = () => {
    const brands = filterParam.brands; 
    const sizes = filterParam.sizes;
    const minPrice = filterParam.minPrice;
    const maxPrice = filterParam.maxPrice;

    console.log(filterParam);

    setProductCards([...products].filter((item) => {
      let condition;
      if (brands.length === 0 && sizes.length !== 0) {
        condition = sizes.some((elem) => item.sizes.indexOf(elem) !== -1)
      }
      else if (brands.length !== 0 && sizes.length === 0) {
        condition = brands.indexOf(item.brand) !== -1
      }
      else if (brands.length === 0 && sizes.length === 0) {
        condition = true;
      }
      else {
        condition = brands.indexOf(item.brand) !== -1 && sizes.some((elem) => item.sizes.indexOf(elem) !== -1)
      }
      return (
        item.price >= minPrice &&
        item.price <= maxPrice &&
        condition
      )
    }));
  }

  const addToFilter = (parameter, value) => {
    if (filterParam[parameter].indexOf(value) === -1) {
      const newArr = [...filterParam[parameter], value];
      setFilterParam({...filterParam, [parameter]: newArr});
    }
    else {
      const newArr = filterParam[parameter].slice();
      newArr.splice(newArr.indexOf(value), 1);
      setFilterParam({...filterParam, [parameter]: newArr});
    }
  }

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
              <polyline fill="none" points="17 2 9.5 10 2 2" fillRule="evenodd" strokeWidth="2" strokeLinecap="square"></polyline>
            </svg>
          </div>
        </div>
      </div>
      <div className={styles.content}>
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
            <DoubleRangeInput min={0} max={300} onChange={({min, max}) => setFilterParam({...filterParam, minPrice: min, maxPrice: max})}/>
          </div>
          <div className={styles.filter__brands}>
            <h3 className={styles.filter__brandsCaption}>Brands</h3>
            <ul>
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
            <ul className={styles.filter__sizeList}>
              {[...new Array(2 * (maxSize - minSize) + 1)].map((item, i) => {
                return (
                  <li key={i}>
                    <input 
                      type="checkbox"
                      className={styles.filter__sizeCheckbox}
                      id={'size' + i}
                      name="brand"
                      onChange={() => addToFilter('sizes', minSize + i/2)}
                    />
                    <label htmlFor={'size' + i}>{minSize + i/2}</label>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className={styles.filter__btns}>
            <Button2 
              className={styles.filter__btn}
              onClick={() => filterItems()}
            >
              Apply
            </Button2>
            <Button2 className={styles.filter__btn}>Reset</Button2>
          </div>
        </div>
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