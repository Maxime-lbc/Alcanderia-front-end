import React from 'react';

interface Props {
  src: string;
  alt: string;
}

function Illustration({ alt, src }: Props) {
  return <img className="h-44 self-center pt-5 md:pt-0 md:h-auto md:w-20%" src={src} alt={alt} />;
}

export default Illustration;
