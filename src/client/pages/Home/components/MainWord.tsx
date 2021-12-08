import React from 'react';

interface Props {
  children: React.ReactNode;
}

const MainWord = ({ children }: Props) => {
  return <em className="text-green-500">{children}</em>;
};

export default MainWord;
