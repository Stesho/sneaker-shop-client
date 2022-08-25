import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProductPage.module.scss';
import Button2 from '../../components/button/Button2';
import { useState } from 'react';

const ProductPage = ({products}) => {
  const {id} = useParams();
  const [product, setProduct] = useState(products.find((item) => item.id === Number(id)));
  const minSize = 35;
  const maxSize = 48;

  return (
    <main className={styles.main}>
      <div className={styles.productPage}>
        <div className={styles.images}>
          <div className={styles.img}>
            <img src={require(`../../assets/img/products/${product.imgUrl}`)} alt="NIKE AIR MAX" />
          </div>
          <div className={styles.img}>
            <img src={require(`../../assets/img/products/${product.imgUrl}`)} alt="NIKE AIR MAX" />
          </div>
          <div className={styles.img}>
            <img src={require(`../../assets/img/products/${product.imgUrl}`)} alt="NIKE AIR MAX" />
          </div>
          <div className={styles.img}>
            <img src={require(`../../assets/img/products/${product.imgUrl}`)} alt="NIKE AIR MAX" />
          </div>
        </div>
        <div className={styles.info}>
          <span className={styles.info__brand}>{product.brand}</span>
          <h2 className={[styles.info__model, styles.title2].join(' ')}>{product.model}</h2>
          <span className={styles.info__sku}>Sku: 30200129</span>
          <span className={styles.info__price}>${product.price}</span>
          <div className={styles.info__size}>
            <span className={styles.info__sizeCaption}>Select size:</span>
            <span className={styles.info__fitGuide}>Size & fit guide</span>
          </div>
          <ul className={styles.info__sizeList}>
            {[...new Array(2 * (maxSize - minSize) + 1)].map((item, i) => {
              return (
                <li key={i}>
                  <input
                    type="radio"
                    className={styles.info__sizeItem}
                    id={'size' + i}
                    name="brand"
                    disabled={product.sizes.indexOf(minSize + i/2) !== -1 ? false : true}
                  />
                  <label disabled htmlFor={'size' + i}>{minSize + i/2}</label>
                </li>
              )
            })}
          </ul>
          <span className={styles.info__subscription}>Don't see your size? notify me when available.</span>
          <Button2>Add to card</Button2>
          <div className={styles.info__description}>
            Creative directed by Joe Freshgoods, Conversations
            Amongst Us reimagines the 574, an icon rooted in versatility.
            In a culture where you're only as fresh as your white sneaks
            and your fit is the perfect conversation starter, this 574
            design takes cues from the historical and cultural styles of
            communication and celebrates the conversations within the
            Black community, while opening the landscape for new dialogue.
          </div>
          <ul className={styles.info__additionList}>
            <li className={styles.info__additionItem}>Style: U574BH2</li>
            <li className={styles.info__additionItem}>All Sales Are Final. NO Cancellations, Returns, Exchanges or Merchandise Credit on this Special Release Product</li>
            <li className={styles.info__additionItem}>Sizing listed in EU Men's</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;