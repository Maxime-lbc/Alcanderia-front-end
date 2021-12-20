import React from 'react';
import { SocialLink } from './SocialLink';
import styles from './styles';

const Socials = () => {
  return (
    <div className={styles.div.container}>
      <SocialLink name="discord" href="https://discord.gg/PCm6Z29b" />
      <SocialLink name="twitter" href="https://twitter.com/alcanderia" />
      <SocialLink
        name="youtube"
        href="https://www.youtube.com/channel/UChSATtUM0_OrlQCpWM6zz3Q"
      />
      <SocialLink name="tiktok" href="https://www.tiktok.com/@alcanderia" />
    </div>
  );
};

export default Socials;
