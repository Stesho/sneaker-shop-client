import React, { useEffect, useState, useRef } from 'react';
import styles from './Select.module.scss';

const Select = ({options}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0].value || 'select');
  const select = useRef();

  const arrowAnimation = () => isOpen ? styles.rotateUp : styles.rotateDown;

  const setSelected = (option) => {
    setSelectedOption(option.value);
    setIsOpen(!isOpen);
    option.sortFunc();
  }

  useEffect(() => {
    const onClick = (event) => {
      return select.current.contains(event.target) || setIsOpen(!isOpen);
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <div ref={select} className={styles.select}>
      <button className={styles.select__btn} onClick={() => setIsOpen(!isOpen)}>
        <span>Sort</span>
        <span className={styles.select__colon}>:</span>
        <span className={styles.select__selectedOption}>{selectedOption}</span>
        <svg className={arrowAnimation()} viewBox="0 0 19 12">
          <polyline fill="none" points="17 2 9.5 10 2 2" fillRule="evenodd" strokeWidth="2" strokeLinecap="square"></polyline>
        </svg>
      </button>
      {isOpen && (
        <ul className={styles.select__list}>
          {options.map((option) => {
            return (
              <li
                className={styles.select__option}
                key={option.id}
                onClick={() => setSelected(option)}
              >
                {option.value}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default Select;