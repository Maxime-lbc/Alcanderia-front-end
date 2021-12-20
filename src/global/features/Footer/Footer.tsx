import React from 'react';
import styles from './styles';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.div.container}>
        <div className={styles.div.wrapper}>
          <div className={styles.div.box}>
            <p className={styles.p.copyright}>&copy; Alcanderia 2021-2022</p>
            <p className={styles.p.contact}>contact@alcanderia.fr</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
