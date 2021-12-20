import React from 'react';
import styles from './styles';

interface Props {
  opened: boolean;
  onClick: (param: boolean) => void;
}

export const BurgerButton = ({ opened, onClick }: Props) => {
  return (
    <div className={styles.default.container} onClick={() => onClick(!opened)}>
      <div
        className={`${styles.default.rectangle[1]} ${
          opened && styles.opened.rectangle[1]
        }`}
      />
      <div
        className={`${styles.default.rectangle[2]} ${
          opened && styles.opened.rectangle[2]
        }`}
      />
      <div
        className={`${!opened && styles.notOpened} ${
          styles.default.rectangle[3]
        } ${opened && styles.opened.rectangle[3]}`}
      ></div>
    </div>
  );
};
