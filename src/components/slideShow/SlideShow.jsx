import React, {useState, useMemo, useEffect} from 'react';
import styles from './SlideShow.module.scss';

const SlideShow = ({children}) => {
  const [active, setActive] = useState(0);
  
  function changeSlide(index) {
    children[active].checked = false;
    children[index].checked = true;
    setActive(index);
  }

  // useEffect(() => {
  //   let timer = setTimeout(async function f() {
  //     changeSlide(active + 1);
  //     console.log('timer');
  //     timer = setTimeout(f, 2000);
  //   }, 2000);
  // }, []);

  return (
    <div className={styles.slideShow}>
      {/* <img src={require(`../../${children[active].imgUrl}`)} alt="sneakers" className={styles.slideShow__slide} /> */}
      {children.map((item) => {
        return (
          <img src={require(`../../${item.imgUrl}`)} alt="sneakers" style={{display: item.checked ? 'block' : 'none'}} className={styles.slideShow__slide} key={item.id} />
        )
      })}
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