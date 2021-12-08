import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Title = ({ children }: Props) => {
  return <h2 className="py-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold dark:text-gray-50">{children}</h2>;
};

export default Title;
