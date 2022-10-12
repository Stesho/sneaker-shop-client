import React from 'react';
import { useSelector } from 'react-redux';
import styles from './CartPage.module.scss';
import CartList from '../../components/cart/cartList/CartList';

const CartPage = () => {
  const cart = useSelector(state => state.cart);

  return (
    <main className={styles.main}>
      <h2 className={[styles.title, styles.title2].join(' ')}>Cart</h2>
      <div className={styles.cart}>
        {cart.products.length === 0
        ? <div className={styles.emptyCart}>
            text
          </div>
        : <CartList products={cart.products}/>
        }
      </div>
    </main>
  );
};

export default CartPage;