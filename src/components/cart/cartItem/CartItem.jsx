import { React, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateProductById, removeProductById } from '../../../store/cartSlice';
import styles from './CartItem.module.scss';

const CartItem = ({item, calculateTotal}) => {
  const [count, setCount] = useState(item.count);
  const dispatch = useDispatch();

  const updateProduct = (newCount) => {
    dispatch(updateProductById({
      id: item.id,
      product: {
        ...item,
        count: newCount,
      }
    }));
  }

  const incrementCount = () => {
    if(count < 99) {
      setCount(count + 1);
      updateProduct(count + 1);
    }
  }
  
  const decrementCount = () => {
    if(count > 1) {
      setCount(count - 1);
      updateProduct(count - 1);
    }
  }
  
  const removeProduct = (id) => {
    dispatch(removeProductById({id: id}));
  }

  useEffect(() => {
    calculateTotal();
  }, [count]);

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
          <button className={styles.counter__minus} onClick={() => decrementCount()}>
            &ndash;
          </button>
          <div className={styles.counter__count}>
            {count}
          </div>
          <button className={styles.counter__plus} onClick={() => incrementCount()}>
            +
          </button>
        </div>
        <button className={styles.cartItem__remove} onClick={() => removeProduct(item.id)}>
          Remove
        </button>
      </div>
      <button className={styles.cartItem__price}>
        ${item.price * count}
      </button>
    </div>
  );
};

export default CartItem;