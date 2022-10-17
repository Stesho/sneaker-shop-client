import React, { useState, useRef, useEffect } from 'react';
import Button2 from '../button/Button2';
import styles from './SlideShow.module.scss';

const SlideShow = ({children}) => {
  const [active, setActive] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 5000;

  function changeSlide(newactive) {
    children[active].checked = false;
    children[newactive].checked = true;
    setActive(newactive);
  }

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      changeSlide(active === children.length - 1 ? 0 : active + 1);
    }, delay);

    return () => {
      resetTimeout();
    };
  }, [active]);

  return (
    <div className={styles.slideShow}>
      {children.map((item) => {
        return (
          <img src={require(`../../${item.imgUrl}`)} alt="sneakers" style={{display: item.checked ? 'block' : 'none'}} className={styles.slideShow__slide} key={item.id} />
        )
      })}
      <div className={styles.slideShow__captionWrapper}>
        {children.map((item) => {
          return (
            <div className={styles.slideShow__caption} style={{display: item.checked ? 'flex' : 'none'}} key={item.id}>
              <div className={[styles.slideShow__brand, 'animate__animated', 'animate__fadeInUp'].join(' ')}>
                {item.brand}
              </div>
              <div className={[styles.slideShow__model, 'animate__animated', 'animate__fadeInUp'].join(' ')}>
                {item.model}
              </div>
              <Button2 className={['animate__animated', 'animate__fadeInUp'].join(' ')}>
                Shop
              </Button2>
            </div>
          )
        })}
      </div>
      <div className={styles.slideShow__controllers}>
        {children.map((item, i) => {
          return (
            <div className={styles.slideShow__dotWrapper} onClick={() => changeSlide(i)} key={item.id}>
              <button className={item.checked ? [styles.slideShow__dot, styles.active].join(' ') : styles.slideShow__dot} />  
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default SlideShow;