import React, { useState, useEffect } from 'react';
import { Link, LinkProps, useLocation } from 'react-router-dom';
import styles from './styles';

type Props = Omit<LinkProps, 'className'>;

const NavLink = (props: Props) => {
  const [isActive, setIsActive] = useState<boolean>();
  const location = useLocation();
  useEffect(() => {
    location.pathname === props.to ? setIsActive(true) : setIsActive(false);
  }, [location, props.to]);
  return (
    <Link
      {...props}
      className={`${styles.default} ${isActive && styles.active}`}
    />
  );
};

export default NavLink;
