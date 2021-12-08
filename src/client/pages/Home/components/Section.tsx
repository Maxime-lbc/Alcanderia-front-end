import React from 'react';

interface Props {
  children: React.ReactNode;
  inverted?: boolean;
}

const Section = ({ children, inverted }: Props) => {
  return <section className={`w-screen px-5 pt-10 md:px-20 md:pt-20 flex flex-col  ${inverted ? 'md:flex-row-reverse' : 'flex-col md:flex-row'}  flex-wrap justify-start md:justify-between items-start content-start`}>{children}</section>;
};

export default Section;
