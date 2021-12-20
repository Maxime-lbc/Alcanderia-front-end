import React from 'react';
import styles from './styles';

interface Props {
  children: React.ReactNode;
  inverted?: boolean;
}

const Paragraph = ({ children, inverted }: Props) => {
  return (
    <p
      className={`${styles.default} ${
        inverted ? styles.inverted.true : styles.inverted.false
      }`}
    >
      {children}
    </p>
  );
};

export default Paragraph;
