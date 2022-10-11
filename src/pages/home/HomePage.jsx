import React, { useState, useEffect } from 'react';
import styles from './HomePage.module.scss';
import SlideShow from '../../components/slideShow/SlideShow';
import BrandCard from '../../components/brandCard/BrandCard';
import Slider from '../../components/slider/Slider';
import ProductCard from '../../components/productCard/ProductCard';
import Button2 from '../../components/button/Button2';
import Parallax from '../../components/parallax/Parallax';

const HomePage = ({products}) => {
  const [slides, setSlides] = useState([
    {id: 1, imgUrl: 'assets/img/homePage/slide1.jpg', checked: true},
    {id: 2, imgUrl: 'assets/img/homePage/slide2.jpg', checked: false},
    {id: 3, imgUrl: 'assets/img/homePage/slide3.jpg', checked: false},
    {id: 4, imgUrl: 'assets/img/homePage/slide4.jpg', checked: false},
  ]);
  const [productCards, setProductCards] = useState(products);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={styles.main}>
      <section className={styles.slideShow}>
        <SlideShow>
          {slides}
        </SlideShow>
      </section>
      <section className={styles.brandsWrapper}>
        <div className={[styles.container, styles.brands].join(' ')}>
          <BrandCard brandName={'Purple brand'} imgUrl={'brand1.jpg'} />
          <BrandCard brandName={'Up nyc'} imgUrl={'brand2.jpg'} />
          <BrandCard brandName={'Adidas'} imgUrl={'brand3.jpg'} />
        </div>
      </section>
      <section className={styles.sliderWrapper}>
        <div className={[styles.container, styles.slider].join(' ')}>
          <h2 className={[styles.slider__header, styles.title2].join(' ')}>New arrivals</h2>
          <Slider>
            {productCards.map((item) => {
              return (
                <ProductCard
                  imgUrl={item.img_urls[0]}
                  brand={item.brand}
                  model={item.model}
                  price={item.price}
                  style={{margin: '30px'}}
                  key={item.id}
                />
              )
            })}
          </Slider>
          <div className={styles.slider__btn}>
            <Button2>View all products</Button2>
          </div>
        </div>
      </section>
      <section className={styles.brandsWrapper}>
        <div className={[styles.container, styles.brands].join(' ')}>
          <BrandCard brandName={'Sergio Tacchini'} imgUrl={'brand4.jpg'} />
          <BrandCard brandName={'Paper planes'} imgUrl={'brand5.jpg'} />
          <BrandCard brandName={'Honor the gift'} imgUrl={'brand6.jpg'} />
        </div>
      </section>
      <Parallax height={400} imgUrl={'parallax.jpg'}/>
      <section className={styles.brandsWrapper}>
        <div className={[styles.container, styles.brands].join(' ')}>
          <BrandCard brandName={'Purple brand'} imgUrl={'brand1.jpg'} />
          <BrandCard brandName={'Up nyc'} imgUrl={'brand2.jpg'} />
          <BrandCard brandName={'Adidas'} imgUrl={'brand3.jpg'} />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
