import React, {useState, useEffect, useRef} from 'react';
import styles from './Slider.module.scss';

const Slider = ({children}) => {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(4);
  const [frameWidth, setFrameWidth] = useState(0);
  const frame = useRef(null);
  const card = useRef(null);
  const line = useRef(null);
  const btnL = useRef(null);
  const btnR = useRef(null);
  const count = children.length;

  useEffect(() => {
    const cardWidth = card.current.offsetWidth;
    setFrameWidth(visible * (cardWidth));
    frame.current.style.width = visible * cardWidth + 'px';
  }, []);

  useEffect(() => {
    let offset;

    if(active + 1 > count / visible) {
      offset = -frameWidth * (count / visible - 1);  
    }
    else {
      offset = -frameWidth * active ;
    }
    line.current.style.transform = 'translate(' + offset +'px)';

    btnL.current.disabled = active === 0 ? true : false;
    btnR.current.disabled = active === Math.trunc(count/visible) ? true : false;
  }, [active]);

  return (
    <div className={styles.slider}>
      <button className={[styles.slider__controller, styles.left].join(' ')} ref={btnL} onClick={() => setActive((cur) => cur - 1)}>
        <svg viewBox="0 0 100 100">
          <path d="M 20,50 L 60,90 L 60,85 L 25,50  L 60,15 L 60,10 Z"></path>
        </svg>
      </button> 
      <div className={styles.slider__frame} ref={frame}>
        <div className={styles.slider__line} ref={line}>
          {children.map((item) => {
            return (
              <div className={styles.slider__item} ref={card} key={item.key}>
                {item}
              </div>
            )
          })}
        </div>
      </div>
      <button className={[styles.slider__controller, styles.right].join(' ')} ref={btnR} onClick={() => setActive((cur) => cur + 1)}>
        <svg viewBox="0 0 100 100">
          <path d="M 20,50 L 60,90 L 60,85 L 25,50  L 60,15 L 60,10 Z" transform="translate(100, 100) rotate(180) "></path>
        </svg>
      </button>
    </div>
  );
};
 
export default Slider; 
