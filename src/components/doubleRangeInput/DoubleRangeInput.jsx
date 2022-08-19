import React from 'react';
import { useRef, useState, useEffect } from 'react';
import styles from './DoubleRangeInput.module.scss';

const DoubleRangeInput = ({min, max, setMin, setMax, onChange}) => {
  const [minVal, setMinVal] = useState();
  const [maxVal, setMaxVal] = useState();
  const [isOnFocus, setIsOnFocuse] = useState(false);
  const track = useRef();
  const step = 269.8/300;

  const moveLeftThumb = (minValue, maxValue) => {
    track.current.style.left = `${minValue * step}px`;
    track.current.style.width = `${(maxValue - minValue) * step}px`;
    setMin(minValue);
  }

  const moveRightThumb = (minValue, maxValue) => {
    track.current.style.width = `${(maxValue - minValue) * step}px`;
    setMax(maxValue);
  }

  useEffect(() => {
    if(min === 0 && max === 300) {
      track.current.style.left = '0px';
      track.current.style.width = '100%';
    }
    setMinVal(min);
    setMaxVal(max);
  }, [min, max]);

  useEffect(() => {
    onChange(Number(min), Number(max));
  }, [min, max]);

  return (
    <div className={styles.doubleInput}>
      <div className={styles.doubleInput__values}>
        <input 
          type="text"
          value={isOnFocus ? minVal : min}
          onFocus={() => {
            setIsOnFocuse(true);
          }}
          onChange={(event) => {
            setMinVal(event.target.value);
          }}
          onBlur={(event) => {
            setIsOnFocuse(false);
            const value = Math.min(event.target.value, max);
            moveLeftThumb(value, max);
          }}
        />
        <input
          type="text"
          value={isOnFocus ? maxVal : max}
          onFocus={() => {
            setIsOnFocuse(true);
          }}
          onChange={(event) => {
            setMaxVal(event.target.value);
          }}
          onBlur={(event) => {
            setIsOnFocuse(false);
            const value = Math.max(event.target.value, min);
            value <= 300 ? moveRightThumb(min, value) : moveRightThumb(min, 300);
          }}
        />
      </div>
      <input
        className={styles.doubleInput__thumb}
        type="range"
        min={0}
        max={300}
        value={min}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), max);
          moveLeftThumb(value, max);
        }}
      />
      <input
        className={styles.doubleInput__thumb}
        type="range"
        min={0}
        max={300}
        value={max}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), min);
          moveRightThumb(min, value)
        }}
      />
      <div className={styles.doubleInput__slider}>
        <div className={styles.doubleInput__sliderRange}>
          <div ref={track} className={styles.doubleInput__sliderTrack} />
        </div>
      </div>
    </div>
  );
};

export default DoubleRangeInput;