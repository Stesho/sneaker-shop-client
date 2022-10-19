import React from 'react';
import styles from './Order.module.scss';

const Order = ({item}) => {
  return (
    <div className={styles.order}>
      <div className={styles.order__product}>
        <div className={styles.order__img}>
          <img src={require('../../assets/img/products/' + item.img_urls[0])} alt="product" />
        </div>
        <div className={styles.order__info}>
          <div className={styles.order__brand}>
            {item.brand}
          </div>
          <div className={styles.order__model}>
            {item.model}
          </div>
          <div className={styles.order__size}>
            Size: {item.sizes}
          </div>
        </div>
      </div>
      <div className={styles.order__quantity}>
        {item.count}
      </div>
      <button className={styles.order__price}>
        ${item.count * item.price}
      </button>
    </div>
  );
};

export default Order;