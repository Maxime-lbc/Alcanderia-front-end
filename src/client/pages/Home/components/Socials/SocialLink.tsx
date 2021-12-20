import React from 'react';
import styles from './styles';

interface Props {
  href: string;
  name: string;
}

export const SocialLink = ({ href, name }: Props) => {
  return (
    <a
      className={styles.link}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <img src={`/assets/images/${name}.png`} alt={name} />
    </a>
  );
};
