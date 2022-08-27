import React, { useEffect, useRef } from 'react';
import styles from './Modal.module.scss';

const Modal = ({children, style, isActive, setIsActive}) => {
  // const modal = useRef();

  // useEffect(() => {
  //   const onClickOutside = (event) => {
  //     if(modal.current.contains(event.target) === false && isActive === true) {
  //       setIsActive(false);
  //     }
  //   }
  //   document.addEventListener('click', onClickOutside);
  //   return () => document.removeEventListener('click', onClickOutside);
  // }, []);

  return (
    <div className={styles.overlay} style={{display: isActive ? 'flex' : 'none'}}>
      <div className={styles.modal} style={style}>
        <button className={styles.modal__close} onClick={() => setIsActive(false)}>
          <svg viewBox="0 0 20 20" fill="none">
            <line x1="2" y1="17.8787" x2="17.8787" y2="2" strokeWidth="3" strokeLinecap="round"/>
            <line x1="17.8787" y1="18" x2="2" y2="2.12132" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;