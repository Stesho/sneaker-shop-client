import React from 'react';
import styles from './MyOrders.module.scss';

const Overview = () => {
  return (
    <div className={styles.overview}>
      <div className={styles.overview__icon}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <g fill="#2D2D2D" fillRule="evenodd">
            <path fillRule="nonzero" d="M18 4.667L16 2H4L2 4.667V18h16V4.667zM0 4l3-4h14l3 4v16H0V4z"/>
            <path d="M0 4h20v2H0z"/>
            <path d="M9 1.111h2v4H9z"/>
          </g>
        </svg>
      </div>
      <h2 className={styles.overview__title}>
        Title
      </h2>
      <p className={styles.overview__caption}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Nostrum facere maiores error repudiandae natus quo, reiciendis
        enim numquam fugiat veritatis officia inventore cum neque atque temporibus distinctio, vero quisquam nobis?        
      </p>
    </div>
  );
};

export default Overview;