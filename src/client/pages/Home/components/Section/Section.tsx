import React from 'react';
import styles from './styles';

interface Props {
  children: React.ReactNode;
  inverted?: boolean;
}

const Section = ({ children, inverted }: Props) => {
  return (
    <section
      className={`${styles.default} ${
        inverted ? styles.inverted.true : styles.inverted.false
      }`}
    >
      {children}
    </section>
  );
};

export default Section;
