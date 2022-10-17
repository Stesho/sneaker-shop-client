import React, { useState, useEffect } from 'react';
import styles from './HomePage.module.scss';
import SlideShow from '../../components/slideShow/SlideShow';
import BrandCard from '../../components/brandCard/BrandCard';
import Slider from '../../components/slider/Slider';
import ProductCard from '../../components/productCard/ProductCard';
import Button2 from '../../components/button/Button2';
import Parallax from '../../components/parallax/Parallax';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const HomePage = ({products}) => {
  const [slides, setSlides] = useState([
    {id: 1, imgUrl: 'assets/img/homePage/slide1.jpg', brand: 'Adidas collection', model: 'We are familia', checked: true},
    {id: 2, imgUrl: 'assets/img/homePage/slide2.jpg', brand: 'Just dropped', model: "New in men's footwear", checked: false},
    {id: 3, imgUrl: 'assets/img/homePage/slide3.jpg', brand: 'Just released styles', model: 'Jordan brand', checked: false},
    {id: 4, imgUrl: 'assets/img/homePage/slide4.jpg', brand: 'Nike presents', model: 'Nike hight', checked: false},
  ]);
  const [productCards, setProductCards] = useState(products);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
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
          <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true} offset={0}>
            <BrandCard brandName={'Purple brand'} imgUrl={'brand1.jpg'} />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true} offset={0}>
            <BrandCard brandName={'Up nyc'} imgUrl={'brand2.jpg'} />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce={true} offset={0}>
            <BrandCard brandName={'Adidas'} imgUrl={'brand3.jpg'} />
          </AnimationOnScroll>
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
          <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true} offset={0}>
            <BrandCard brandName={'Sergio Tacchini'} imgUrl={'brand4.jpg'} />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true} offset={0}>
            <BrandCard brandName={'Paper planes'} imgUrl={'brand5.jpg'} />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce={true} offset={0}>
            <BrandCard brandName={'Honor the gift'} imgUrl={'brand6.jpg'} />
          </AnimationOnScroll>
        </div>
      </section>
      <Parallax height={400} imgUrl={'parallax.jpg'}/>
      <section className={styles.brandsWrapper}>
        <div className={[styles.container, styles.brands].join(' ')}>
          <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true} offset={0}>
            <BrandCard brandName={'Purple brand'} imgUrl={'brand1.jpg'} />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true} offset={0}>
            <BrandCard brandName={'Up nyc'} imgUrl={'brand2.jpg'} />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce={true} offset={50}>
            <BrandCard brandName={'Adidas'} imgUrl={'brand3.jpg'} />
          </AnimationOnScroll>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
