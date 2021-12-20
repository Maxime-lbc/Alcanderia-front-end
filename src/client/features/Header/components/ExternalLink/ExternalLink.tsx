import React from 'react';
import styles from './styles';

interface Props {
  children: React.ReactNode;
  href: string;
  setFalse?: (arg: boolean) => void;
}

export const ExternalLink = ({ children, href, setFalse }: Props) => {
  return (
    <a
      href={href}
      className={styles.text}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        setFalse && setFalse(false);
      }}
    >
      {children}
    </a>
  );
};
