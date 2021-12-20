import React from 'react';
import styles from './styles';

interface Props {
  src: string;
  alt: string;
}

function Illustration({ alt, src }: Props) {
  return <img className={styles.illustration} src={src} alt={alt} />;
}

export default Illustration;
