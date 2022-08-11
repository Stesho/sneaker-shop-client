import React from 'react';
import styles from './Parallax.module.scss';

const Parallax = ({height = 400, imgUrl}) => {
  return (
    <section style={{height: height, backgroundImage: `url(${require(`../../assets/img/homePage/${imgUrl}`)})`}} className={styles.parallax}></section>
  );
};

export default Parallax; 