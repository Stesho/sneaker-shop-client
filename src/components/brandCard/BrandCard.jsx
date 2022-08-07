import React from 'react';
import styles from './BrandCard.module.scss';
import Button1 from '../button/Button1';

const BrandCard = ({brandName, imgUrl}) => {
  return (
    <div className={styles.brandCard}>
      <img src={require(`../../assets/img/homePage/${imgUrl}`)} alt="#" className={styles.brandCard__background} />
      <div className={styles.brandCard__label}>
        <div className={styles.brandCard__name}>
          {brandName}
        </div>
        <Button1>Shop now</Button1>
      </div>
    </div>
  );
};

export default BrandCard;
