import React from 'react';
import styles from './styles';

interface Props {
  children: React.ReactNode;
}

const MainWord = ({ children }: Props) => {
  return <em className={styles.word}>{children}</em>;
};

export default MainWord;
