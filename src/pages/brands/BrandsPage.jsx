import React, { useEffect } from 'react';
import styles from './BrandsPage.module.scss';

const BrandsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={styles.main}>
      <h2 className={[styles.pageTitle, styles.title2].join(' ')}>
        Brands
      </h2>
      <div className={styles.brands}>
        <div className={styles.brandCard}>
          <img src={require('../../assets/icons/brands/adidas_logo.svg.png')} alt="adidas logo" />
          <div className={styles.brandCard__description}>
            <div className={styles.brandCard__descriptionText}>
              <span>Adidas AG</span> is a German multinational corporation, founded and headquartered in Herzogenaurach, Bavaria, that designs and manufactures shoes,
              clothing and accessories. It is the largest sportswear manufacturer in Europe, and the second largest in the world, after Nike. It is the
              holding company for the <span>Adidas Group</span>, which consists 8.33% stake of the football club Bayern München, and Runtastic, an Austrian fitness
              technology company. <span>Adidas's</span> revenue for 2018 was listed at €21.915 billion.
            </div>
          </div>
        </div>
        <div className={styles.brandCard}>
          <img src={require('../../assets/icons/brands/asics_logo.svg.png')} alt="asics logo" />
          <div className={styles.brandCard__description}>
            <div className={styles.brandCard__descriptionText}>
              <span>Asics</span> is a Japanese multinational corporation which produces sportswear. The name is an acronym for the Latin phrase anima sana in corpore
              sano (translated by <span>Asics</span> as "a sound mind, in a sound body"). Products manufactured and marketed by <span>Asics</span> include footwear
              (sneakers, sandals), clothing (t-shirts, jackets, hoodies, swimwear, compression garments, pants, socks), and accessories
              (bags, backpacks, caps).
            </div>
          </div>
        </div>
        <div className={styles.brandCard}>
          <img src={require('../../assets/icons/brands/converse_logo.svg.png')} alt="converse logo" />
          <div className={styles.brandCard__description}>
            <div className={styles.brandCard__descriptionText}>
              <span>Converse</span> is an American brand of lifestyle wear that markets, distributes, and licenses sneakers, skating shoes, lifestyle brand
              footwear, apparel, and accessories. Founded in 1908, it has been a subsidiary of Nike, Inc. since 2003. <span>Converse</span>, initially known as the
              <span>Converse</span> Rubber Shoe Company, produced winterized rubber-soled shoes and boots.
            </div>
          </div>
        </div>
        <div className={styles.brandCard}>
          <img src={require('../../assets/icons/brands/jordan_logo.svg.png')} alt="jordan logo" />
          <div className={styles.brandCard__description}>
            <div className={styles.brandCard__descriptionText}>
              <span>Air Jordan</span> is a line of basketball shoes and athletic clothing produced by American corporation Nike. The first <span>Air Jordan</span> shoe was
              produced for Hall of Fame former basketball player Michael Jordan during his time with the Chicago Bulls in late 1984 and released
              to the public on April 1, 1985. The shoes were designed for Nike by Peter Moore, Tinker Hatfield, and Bruce Kilgore
            </div>
          </div>
        </div>
        <div className={styles.brandCard}>
          <img src={require('../../assets/icons/brands/new_balance_logo.svg.png')} alt="new balance logo" />
          <div className={styles.brandCard__description}>
            <div className={styles.brandCard__descriptionText}>
              <span>New Balance</span> Athletics, Inc. (NB), best known as simply <span>New Balance</span>, is one of the world's major sports footwear and apparel manufacturers.
              Based in Boston, Massachusetts, the multinational corporation was founded in 1906 as the <span>New Balance</span> Arch Support Company. <span>New Balance</span>
              maintains a manufacturing presence in the United States, as well as in the United Kingdom for the European market, where they produce
              some of their popular models. <span>New Balance</span> claims to differentiate their products with technical features, such as blended gel inserts,
              heel counters and a greater selection of sizes, particularly for very narrow or very wide widths. The company is privately held and
              totaled $4.4 billion in revenue in 2021.
            </div>
          </div>
        </div>
        <div className={styles.brandCard}>
          <img src={require('../../assets/icons/brands/nike_logo.svg.png')} alt="nike logo" />
          <div className={styles.brandCard__description}>
            <div className={styles.brandCard__descriptionText}>
              <span>Nike, Inc.</span> is an American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and
              sales of footwear, apparel, equipment, accessories, and services. The company is headquartered near Beaverton, Oregon, in the Portland
              metropolitan area. It is the world's largest supplier of athletic shoes and apparel and a major manufacturer of sports equipment, with
              revenue in excess of US$37.4 billion in its fiscal year 2020 (ending May 31, 2020). As of 2020, it employed 76,700 people worldwide.
              In 2020 the brand alone was valued in excess of $32 billion, making it the most valuable brand among sports businesses.
            </div>
          </div>
        </div>
        <div className={styles.brandCard}>
          <img src={require('../../assets/icons/brands/puma_logo.svg.png')} alt="puma logo" />
          <div className={styles.brandCard__description}>
            <div className={styles.brandCard__descriptionText}>
              <span>Puma SE</span>, branded as <span>Puma</span>, is a German multinational corporation that designs and manufactures athletic and casual footwear, apparel and
              accessories, which is headquartered in Herzogenaurach, Bavaria, Germany. <span>Puma</span> is the third largest sportswear manufacturer in the world.
              The company was founded in 1948 by Rudolf Dassler. In 1924, Rudolf and his brother Adolf "Adi" Dassler had jointly formed the company
              Gebrüder Dassler Schuhfabrik (Dassler Brothers Shoe Factory). The relationship between the two brothers deteriorated until the two agreed
              to split in 1948, forming two separate entities, Adidas and <span>Puma</span>.
            </div>
          </div>
        </div>
        <div className={styles.brandCard}>
          <img src={require('../../assets/icons/brands/reebok_logo.svg.png')} alt="reebok logo" />
          <div className={styles.brandCard__description}>
            <div className={styles.brandCard__descriptionText}>
              <span>Reebok</span> International Limited is an American fitness footwear and clothing manufacturer that is a part of Authentic Brands Group. It was
              established in England in 1958 as a companion company to J.W. Foster and Sons, a sporting goods company which had been founded in 1895 in
              Bolton, Lancashire. From 1958 until 1986, the brand featured the flag of Great Britain in its logo to signify the origins of the company.
              It was bought by German sporting goods company Adidas in 2005, then sold to Authentic Brands Group in 2021. The company's global
              headquarters are located in Boston, Massachusetts, in the Seaport District.
            </div>
          </div>
        </div>
        <div className={styles.brandCard}>
          <img src={require('../../assets/icons/brands/saucony_logo.svg.png')} alt="saucony logo" />
          <div className={styles.brandCard__description}>
            <div className={styles.brandCard__descriptionText}>
              <span>Saucony</span> is an American brand of athletic footwear and apparel. Founded in 1898, the company is owned by Wolverine World Wide. Products
              commercialised by <span>Saucony</span> include footwear and clothing ranges, such as athletic shoes, jackets, hoodies, t-shirts, sweatpants, shorts,
              and socks. Accessories include hats and backpacks. <span>Saucony's</span> shoe boxes once had the phrase "sock a knee" printed on them, which represents
              the correct pronunciation of the company's name. The <span>Saucony</span> brand logo represents the <span>Saucony</span> Creek's constant flow, and the boulders
              lining its creek bed. The company is a popular racing shoe producer, making track spikes and cross country racing flats. <span>Saucony</span> also makes
              shoes for specific track and field athletics events.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BrandsPage;