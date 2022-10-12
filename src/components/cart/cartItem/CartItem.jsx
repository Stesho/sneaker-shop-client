import React from 'react';
import styles from './CartItem.module.scss';

const CartItem = ({item}) => {
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItem__product}>
        <div className={styles.cartItem__img}>
          <img src={require('../../../assets/img/products/' + item.img_urls[0])} alt="product" />
        </div>
        <div className={styles.cartItem__info}>
          <div className={styles.cartItem__brand}>
            {item.brand}
          </div>
          <div className={styles.cartItem__model}>
            {item.model}
          </div>
          <div className={styles.cartItem__size}>
            Size: {item.sizes}
          </div>
        </div>
      </div>
      <div className={styles.cartItem__quantity}>
        <div className={styles.counter}>
          <button className={styles.counter__minus}>
            &ndash;
          </button>
          <div className={styles.counter__count}>
            1
          </div>
          <button className={styles.counter__plus}>
            +
          </button>
        </div>
        <div className={styles.cartItem__remove}>
          Remove
        </div>
      </div>
      <button className={styles.cartItem__price}>
        ${item.price}
      </button>
    </div>
  );
};

export default CartItem;