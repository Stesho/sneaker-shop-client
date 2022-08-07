import React, { useState } from 'react';
import styles from './HomePage.module.scss';
import BrandCard from '../../components/brandCard/BrandCard';
import Slider from '../../components/slider/Slider';
import ProductCard from '../../components/productCard/ProductCard';

const HomePage = () => {
  const [cards, setCards] = useState([
    {id: 1, imgUrl: 'assets/img/products/nike_dm0521-101_01_400x.jpg', brand: 'Nike', caption: 'Nike Air Trainer 1 (White Midnight Navy)', price: '125$'},
    {id: 2, imgUrl: 'assets/img/products/puma_385629-01_400x.jpg', brand: 'Puma', caption: 'Blaze of Glory The Neverworn (Whisper White)', price: '140$'},
    {id: 3, imgUrl: 'assets/img/products/reebok_gz4935_01_400x.jpg', brand: 'Reebok', caption: 'Club C Geo Mid (White | Chalk | Dark Green)', price: '100$'},
    {id: 4, imgUrl: 'assets/img/products/reebok_gz4936_01_400x.jpg', brand: 'Reebok', caption: 'Club C Geo Mid (Chalk | Flash Red | Vector Blue)', price: '100$'},
    {id: 5, imgUrl: 'assets/img/products/reebok_GX4475_01_400x.jpg', brand: 'Reebok', caption: 'Beatnik Mox (Alabaster | Black | Clascobal)', price: '130$'},
    {id: 6, imgUrl: 'assets/img/products/reebok_GX4480_01_400x.jpg', brand: 'Reebok', caption: 'Beatnik Moc (Court Blue | Black)', price: '130$'},
    {id: 7, imgUrl: 'assets/img/products/converse_a0187c_01_400x.jpg', brand: 'Converse', caption: 'Peanuts x Converse Chuck 70 Hi (Soba | Zink Yellow)', price: '100$'},
    {id: 8, imgUrl: 'assets/img/products/jordan_CT8532-008_01_400x.jpg', brand: 'Jordan', caption: 'Jordan 3 Retro (Black | Rush Orange)', price: '200$'},
    {id: 9, imgUrl: 'assets/img/products/converse_A01798c_01_400x.jpg', brand: 'Converse', caption: 'Converse x Golf Chuck 70 OX (Egret | Corydalis Blue)', price: '100$'},
    {id: 10, imgUrl: 'assets/img/products/converse_166800c_01_dc87be06-76d9-4035-9dc2-b00e4526b009_400x.jpg', brand: 'Converse', caption: 'caption', price: '100$'},
  ]);

  return (
    <div className={styles.home}>
      <main className={styles.main}>
        <div className={styles.slideShow}>
          <img src={require('../../assets/img/homePage/slide1.jpg')} alt="sneakers" className={styles.slideShow__slide}/>
        </div>
        <div className={styles.container}>
          <div className={styles.brands}>
            <BrandCard brandName={'Purple brand'} imgUrl={'brand1.jpg'} />
            <BrandCard brandName={'Up nyc'} imgUrl={'brand2.jpg'} />
            <BrandCard brandName={'Adidas'} imgUrl={'brand3.jpg'} />
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.slider}>
            <h2 className={[styles.slider__header, styles.title2].join(' ')}>New arrivals</h2>
            <Slider>
              {cards.map((item) => {
                return (
                  <ProductCard imgUrl={item.imgUrl} brand={item.brand} caption={item.caption} price={item.price} key={item.id}/>
                )
              })}
            </Slider>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.brands}>
            <BrandCard brandName={'Sergio Tacchini'} imgUrl={'brand4.jpg'} />
            <BrandCard brandName={'Paper planes'} imgUrl={'brand5.jpg'} />
            <BrandCard brandName={'Honor the gift'} imgUrl={'brand6.jpg'} />
          </div>
        </div>
        <div className={styles.parallax}></div>
        <div className={styles.container}>
          <div className={styles.brands}>
            <BrandCard brandName={'Purple brand'} imgUrl={'brand1.jpg'} />
            <BrandCard brandName={'Up nyc'} imgUrl={'brand2.jpg'} />
            <BrandCard brandName={'Adidas'} imgUrl={'brand3.jpg'} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
