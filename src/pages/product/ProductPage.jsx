import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import ValidationError from '../../components/validationError/ValidationError';
import styles from './ProductPage.module.scss';
import Input from '../../components/input/Input';
import Select from '../../components/select/Select';
import Button2 from '../../components/button/Button2';
import Modal from '../../components/modal/Modal';
import useInput from '../../hooks/useInput';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const ProductPage = ({products}) => {
  const validationMessages = {
    notEmpty: "Filed can't be empty",
    isEmail: 'Incorrect email',
  }
  const email = useInput('', {isEmail: true, notEmpty: true}, validationMessages);
  const {id} = useParams();
  const [isActiveSizeTable, setIsActiveSizeTable] = useState(false);
  const [isActiveNotify, setIsActiveNotify] = useState(false);
  const [product, setProduct] = useState(products.find((item) => item.id === Number(id)));
  const [selectedSize, setSelectedSize] = useState(0);
  const [isError, setIsError] = useState(false);
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const minSize = 35;
  const maxSize = 48;
  const sizes = [...new Array(2 * (maxSize - minSize) + 1)].map((_, index) => minSize + index/2);
  const sizeTable = {
    rus: [35, 36, 36.5, 37, 37.5, 38.5, 39, 39.5, 40.5, 41, 41.5, 42, 43, 43.5, 44, 44.5, 45.5, 46, 46.5, 48, 49, 50],
    usa: [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15, 16],
    eu: [36, 37, 37.5, 38, 38.5, 39.5, 40, 40.5, 41.5, 42, 42.5, 43, 44, 44.5, 45, 45.5, 46.5, 47, 47.5, 49, 50, 51],
    cm: [22, 22.5, 23, 23.5, 24, 24.5, 25, 25.5, 26, 26.5, 27, 27.5, 28, 28.5, 29, 29.5, 30, 30.5, 31, 32, 33, 34],
  }

  const options = sizes.map((item, index) => {
    return {
      id: index,
      value: item,
    }
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  }, []);

  const addProductToCart = () => {
    if(!selectedSize) {
      setIsError(true);
      return;
    }
    const size = product.sizes.filter((item) => item === selectedSize);
    dispatch(addToCart({...product, sizes: size, count: 1}));
    navigation('/cart');
  }

  return (
    <main className={styles.main}>
      <Modal isActive={isActiveSizeTable} setIsActive={setIsActiveSizeTable}>
        <div className={styles.sizesTable}>
          <div className={[styles.sizesTable__header, styles.sizesTable__row].join(' ')}>
            <div className={styles.sizesTable__cell}>
              Rus
            </div>
            <div className={styles.sizesTable__cell}>
              Usa
            </div>
            <div className={styles.sizesTable__cell}>
              Eu
            </div>
            <div className={styles.sizesTable__cell}>
              Cm
            </div>
          </div>
          {sizeTable.cm.map((item, index) => {
            return (
              <div className={styles.sizesTable__row} key={item}>
                <div className={styles.sizesTable__cell}>
                  {sizeTable.rus[index]}
                </div>
                <div className={styles.sizesTable__cell}>
                  {sizeTable.usa[index]}
                </div>
                <div className={styles.sizesTable__cell}>
                  {sizeTable.eu[index]}
                </div>
                <div className={styles.sizesTable__cell}>
                  {sizeTable.cm[index]}
                </div>
              </div>
            )
          })}
        </div>
      </Modal>
      <Modal isActive={isActiveNotify} setIsActive={setIsActiveNotify}>
        <div className={styles.modal}>
          <h2 className={[styles.modal__title, styles.title2].join(' ')}>Subscribe to size</h2>
          <span className={styles.modal__model}>{product.model}</span>
          <Select
            options={options}
            caption="Size"
            style={{
              select: {width: '100%', marginBottom: '15px'},
              select__btn: {width: '100%', padding: '12px 14px'},
              select__option: {padding: '12px 14px'},
              select__list: {height: '205px'}
            }}
          />
          {email.isInvalid() && <ValidationError message={email.validation.message}/>}
          <Input
            className={styles.modal__input}
            placeholder="Email"
            value={email.value}
            onChange={(event) => email.onChange(event)}
            onFocus={email.onFocus}
            type="email"
          />
          <Button2 disabled={email.validation.isError()}>Notify me when available</Button2>
        </div>
      </Modal>
      <div className={styles.productPage}>
        <div className={styles.images}>
          {product.img_urls.map((item, index) => {
            return (
              <div className={[styles.img, 'animate__animated', 'animate__fadeInUp'].join(' ')} key={index}>
                <img src={require(`../../assets/img/products/${item}`)} alt={product.model} />
              </div>
            )
          })}
        </div>
        <div className={styles.info}>
          <span className={styles.info__brand}>{product.brand}</span>
          <h2 className={[styles.info__model, styles.title2].join(' ')}>{product.model}</h2>
          <span className={styles.info__sku}>Sku: {product.sku}</span>
          <span className={styles.info__price}>${product.price}</span>
          <div className={styles.info__size}>
            <span className={styles.info__sizeCaption}>Select size:</span>
            <button className={styles.info__fitGuide} onClick={() => setIsActiveSizeTable(true)}>Size & fit guide</button>
          </div>
          <ul className={styles.info__sizeList}>
            {sizes.map((item) => {
              return (
                <li key={item}>
                  <input
                    type="radio"
                    className={styles.info__sizeItem}
                    id={'size' + item}
                    name="brand"
                    disabled={product.sizes.indexOf(item) !== -1 ? false : true}
                    onChange={() => setSelectedSize(item)}
                  />
                  <label disabled htmlFor={'size' + item}>{item}</label>
                </li>
              )
            })}
          </ul>
          <button className={styles.info__subscription} onClick={() => setIsActiveNotify(true)}>
            Don't see your size? notify me when available.
          </button>
          {isError && <ValidationError message='Choose your size please'/>}
          <Button2 onClick={() => addProductToCart()}>Add to card</Button2>
          <div className={styles.info__description}>
            {product.description}
          </div>
          <ul className={styles.info__additionList}>
            <li className={styles.info__additionItem}>Style: {product.style}</li>
            <li className={styles.info__additionItem}>All Sales Are Final. NO Cancellations, Returns, Exchanges or Merchandise Credit on this Special Release Product</li>
            <li className={styles.info__additionItem}>Sizing listed in EU {product.gender === 'male' ? "Men's" : "Women's"}</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;