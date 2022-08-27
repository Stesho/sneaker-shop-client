import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProductPage.module.scss';
import Input from '../../components/input/Input';
import Select from '../../components/select/Select';
import Button2 from '../../components/button/Button2';
import Modal from '../../components/modal/Modal';

const ProductPage = ({products}) => {
  const {id} = useParams();
  const [isActive, setIsActive] = useState(false);
  const [product, setProduct] = useState(products.find((item) => item.id === Number(id)));
  const minSize = 35;
  const maxSize = 48;
  const options = [
    {id:1, value: '45'},
    {id:2, value: '46'},
    {id:3, value: '47'},
  ]

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log('render');

  return (
    <main className={styles.main}>
      <Modal isActive={isActive} setIsActive={setIsActive}>
        <div className={styles.modal}>
          <h2 className={[styles.modal__title, styles.title2].join(' ')}>Subscribe to size</h2>
          <span className={styles.modal__model}>{product.model}</span>
          <Select
            options={options}
            caption="Size"
            style={{
              select: {width: '100%', marginBottom: '15px'},
              select__btn: {width: '100%', padding: '12px 14px'},
              select__option: {padding: '12px 14px'}
            }}
          />
          <Input
            style={{
              input: {width: '100%', marginBottom: '15px'}
            }}
            placeholder="Email"
          />
          <Button2>Notify me when available</Button2>
        </div>
      </Modal>
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
            <button className={styles.info__fitGuide}>Size & fit guide</button>
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
          <button className={styles.info__subscription} onClick={() => setIsActive(true)}>
            Don't see your size? notify me when available.
          </button>
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