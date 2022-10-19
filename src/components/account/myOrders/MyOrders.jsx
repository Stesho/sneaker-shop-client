import { React } from 'react';
import { useSelector } from 'react-redux';
import Order from '../../order/Order';
import Button2 from '../../button/Button2';
import styles from './MyOrders.module.scss';

const MyOrders = () => {
  const user = useSelector(state => state.user);
  const productList = useSelector(state => state.products.products);
  const products = user.orders.map(order => {
    const findedProduct = productList.find(product => order.sku === product.sku);
    return {
      ...findedProduct,
      sizes: order.sizes,
      count: order.count,
    }
  });

  return (
    <div className={styles.myOrders}>
      <div className={styles.myOrders__icon}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <g fillRule="evenodd">
            <path fillRule="nonzero" d="M18 4.667L16 2H4L2 4.667V18h16V4.667zM0 4l3-4h14l3 4v16H0V4z"/>
            <path d="M0 4h20v2H0z"/>
            <path d="M9 1.111h2v4H9z"/>
          </g>
        </svg>
      </div>
      <h2 className={styles.myOrders__title}>My orders</h2>
      <p className={styles.myOrders__caption}>
        All your current orders are displayed here
      </p>
      <div className={styles.myOrders__listHeader}>
        <span className={styles.myOrders__productTitle}>Product</span>
        <span className={styles.myOrders__quantityTitle}>Quantity</span>
        <span className={styles.myOrders__priceTitle}>Total price</span>
      </div>
      {
        user.orders.length === 0
        ? <div className={styles.noOrders}>
            <div className={styles.noOrders__icon}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44">
                <path d="M21 17.667V15h1a1 1 0 10-1-1h-2a3 3 0 114 2.83v.837L34 25v2H10v-2l11-7.333zM22 20l-8 5h16l-8-5z" fillRule="evenodd"/>
              </svg>
            </div>
            <div className={styles.noOrders__title}>
              You currently have no orders
            </div>
            <div className={styles.noOrders__caption}>
              Best get shopping Atmos pronto…
            </div>
            <Button2>Start shopping</Button2>
          </div>
        : <div className={styles.myOrders__list}>
            {products.map((item, index) => {
              return (
                <Order item={item} key={index}/>
              )
            })}
          </div>
      }
      
    </div>
  );
};

export default MyOrders;