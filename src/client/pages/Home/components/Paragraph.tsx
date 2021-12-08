import React from 'react';

interface Props {
  children: React.ReactNode;
  inverted?: boolean;
}

const Paragraph = ({ children, inverted }: Props) => {
  return (
    <p
      className={`w-full md:w-2/3 pt-5px ${
        inverted ? 'pl-10 sm:pl-0 sm:pr-10' : 'pl-10'
      }  text-justify text-sm sm:text-md md:text-xl lg:text-2xl font-bold text-gray-600 dark:text-gray-200`}
    >
      {children}
    </p>
  );
};

export default Paragraph;
