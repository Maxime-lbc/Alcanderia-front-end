import React from 'react';
import styles from './styles';

// TODO Picture switch
const Carrousel = () => {
  return (
    <div className={styles.div.background}>
      <div className={styles.div.blur}>
        <img
          src="/assets/images/banner/1024.png"
          alt="Banner of Alcanderia"
          className={styles.img.banner}
        />
      </div>
    </div>
  );
};

export default Carrousel;
