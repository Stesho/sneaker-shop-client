import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './CartPage.module.scss';
import CartList from '../../components/cart/cartList/CartList';
import Button2 from '../../components/button/Button2';

const CartPage = () => {
  const cart = useSelector(state => state.cart);
  console.log(cart);

  return (
    <main className={styles.main}>
      <h2 className={[styles.title, styles.title2].join(' ')}>Cart</h2>
      <div className={styles.cart}>
        {cart.products.length === 0
        ? <div className={styles.emptyCart}>
            <div className={styles.emptyCart__content}>
              <div className={styles.emptyCart__caption}>
                You currently have no items in a cart
              </div>
              <Link to='/'>
                <Button2>Start shopping</Button2>
              </Link>
            </div>
          </div>
        : <CartList products={cart.products}/>
        }
      </div>
    </main>
  );
};

export default CartPage;