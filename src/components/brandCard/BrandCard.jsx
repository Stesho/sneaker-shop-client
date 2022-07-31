import React from 'react';
import styles from './BrandCard.module.scss';

const BrandCard = ({brandName, imgUrl}) => {
  return (
    <div className={styles.brandCard}>
      <img src={require(`../../assets/img/homePage/${imgUrl}`)} alt="#" className={styles.brandCard__background} />
      <div className={styles.brandCard__label}>
        <div className={styles.brandCard__name}>
          {brandName}
        </div>
        <div className={[styles.brandCard__btn, styles.btn].join(' ')}>
          Shop now
        </div>
      </div>
    </div>
  );
};

export default BrandCard;