import React from 'react';
import styles from './ProductCard.module.scss';

const ProductCard = ({imgUrl, brand, caption, price}) => (
  <div className={styles.card}>
    <div className={styles.card__img}>
      <img src={require('../../' + imgUrl)} alt=""/>
    </div>
    <div className={styles.card__brand}>{brand}</div>
    <div className={styles.card__caption}>{caption}</div>
    <div className={styles.card__price}>{price}</div>
  </div>
);

export default ProductCard;