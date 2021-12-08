import React, { useState, useEffect } from 'react';
import { Link, LinkProps, useLocation } from 'react-router-dom';

type Props = Omit<LinkProps, 'className'>;

const NavLink = (props: Props) => {
  const [isActive, setIsActive] = useState<boolean>();
  const location = useLocation();
  useEffect(() => {
    location.pathname === props.to
      ? setIsActive(true)
      : setIsActive(false);
  }, [location, props.to]);
  return (
    <Link
      {...props}
      className={`font-semibold text-xl dark:text-gray-100 dark:hover:text-indigo-600 hover:text-indigo-600 mx-10 ${isActive && 'underline'}`}
    />
  );
};

export default NavLink;
