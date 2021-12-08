import React from 'react';

const Socials = () => {
  return (
    <div
      id="testflex"
      className="h-44 md:h-44 w-full md:w-1/3 self-center pt-5 md:pt-0 md:self-start flex flex-row items-center justify-evenly"
    >
      <a
        className="w-2/12"
        href="https://discord.gg/PCm6Z29b"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src="/assets/images/discord.png" alt="discord" />
      </a>
      <a
        className="w-2/12"
        href="https://twitter.com/alcanderia"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src="/assets/images/twitter.png" alt="twitter" />
      </a>
      <a
        className="w-2/12"
        href="https://www.youtube.com/channel/UChSATtUM0_OrlQCpWM6zz3Q"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src="/assets/images/youtube.png" alt="youtube" />
      </a>
      <a
        className="w-2/12"
        href="https://www.tiktok.com/@alcanderia"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src="/assets/images/tiktok.png" alt="tiktok" />
      </a>
    </div>
  );
};

export default Socials;
