import React from 'react';
import styles from './ProductCard.module.scss';

const ProductCard = ({imgUrl, brand, model, price, style}) => {
  return (
    <div className={styles.card} style={style}>
      <div className={styles.card__img}>
        <img src={require('../../assets/img/products/' + imgUrl)} alt=""/>
      </div>
      <div className={styles.card__brand}>{brand}</div>
      <div className={styles.card__caption}>{model}</div>
      <div className={styles.card__price}>${price}</div>
    </div>
  );
};

export default ProductCard;