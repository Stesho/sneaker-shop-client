import { React, useState } from 'react';
import styles from './CartList.module.scss';
import CartItem from '../cartItem/CartItem';
import Button2 from '../../button/Button2';
import { useEffect } from 'react';

const CartList = ({products}) => {
  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    const sum = products.reduce((sum, item) => sum + (item.count * item.price), 0);
    setTotal(sum);
  }

  useEffect(() => {
    calculateTotal();
  }, [products]);

  return (
    <div className={styles.cartList}>
      <div className={styles.cartList__listHeader}>
        <span className={styles.cartList__productTitle}>Product</span>
        <span className={styles.cartList__quantityTitle}>Quantity</span>
        <span className={styles.cartList__priceTitle}>Price</span>
      </div>
      {products.map((item, index) => {
        return (
          <CartItem item={item} calculateTotal={calculateTotal} key={index}/>
        )
      })}
      <div className={styles.checkout}>
        <div className={styles.checkout__total}>
          TOTAL: ${total}
        </div>
        <div className={styles.checkout__caption}>
          Shipping & taxes calculated at checkout
        </div>
        <Button2 className={styles.checkout__btn}>
          Checkout
        </Button2>
      </div>
    </div>
  );
};

export default CartList;