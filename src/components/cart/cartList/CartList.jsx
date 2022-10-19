import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import ValidationError from '../../validationError/ValidationError';
import { setUserProps, addOrder } from '../../../store/userSlice';
import { clearCart } from '../../../store/cartSlice';
import styles from './CartList.module.scss';
import CartItem from '../cartItem/CartItem';
import Button2 from '../../button/Button2';

const CartList = ({products}) => {
  const [total, setTotal] = useState(0);
  const [isError, setIsError] = useState(false);
  const user = useSelector(state => state.user);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate()
 
  const calculateTotal = () => {
    const sum = products.reduce((sum, item) => sum + (item.count * item.price), 0);
    setTotal(sum);
  }

  const checkout = async () => {
    if(!user.isAuth) {
      setIsError(true);
      return;
    }
    const products = cart.products.map(item => {
      return {
        sku: item.sku,
        sizes: item.sizes,
        count: item.count
      }
    });
    const newUser = {
      name: user.props.name,
      surname: user.props.surname,
      email: user.props.email,
      password: user.props.password,
      orders: [...user.orders, ...products]
    }
    try {
      const response = await axios.put(`http://localhost:3001/auth/user/${user.props.id}`, newUser);

      dispatch(setUserProps(newUser));
      dispatch(addOrder(products));
      dispatch(clearCart());

      navigate('/account/my-orders');
    }
    catch (err) {
      console.log(err);
    }
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
        {isError && <ValidationError message={'You must be logged in'}/>}
        <Button2 className={styles.checkout__btn} onClick={() => checkout()}>
          Checkout
        </Button2>
      </div>
    </div>
  );
};

export default CartList;