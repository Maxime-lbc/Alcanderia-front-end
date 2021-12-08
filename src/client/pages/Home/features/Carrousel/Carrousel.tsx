import React from 'react';

// TODO Picture switch
const Carrousel = () => {
  return (
    <div className="bg-carrousel-1 bg-center bg-cover bg h-64 sm:h-144 w-screen clip-path-polygon">
      <div className="h-64 sm:h-144 w-screen backdrop-filter backdrop-blur-xs clip-path-polygon flex content-center items-center justify-center">
        <img
          src="/assets/images/banner/1024.png"
          alt="Banner of Alcanderia"
          className="h-24 sm:h-36 md:h-48 xl:h-60 2xl:h-72"
        />
      </div>
    </div>
  );
};

export default Carrousel;
