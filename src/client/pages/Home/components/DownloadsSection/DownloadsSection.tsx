import React from 'react';

//TODO style refactor this

interface Props {
  children?: React.ReactNode;
}

export const DownloadsSection = ({ children }: Props) => {
  return (
    <div className="w-screen px-5 pt-10 md:px-20 md:pt-20 flex flex-row flex-wrap justify-evenly items-start content-around">
      {children}
    </div>
  );
};
