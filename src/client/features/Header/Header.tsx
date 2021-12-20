import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useWindowScroll } from 'react-use';
import { isEmpty } from '../../../global/utils/utils';
import NavLink from './components/NavLink/NavLink';
import ThemeSwitch from './components/ThemeSwitch/ThemeSwitch';
import { LanguageSwitch } from '../../../global/components/LanguageSwitch/LanguageSwitch';
import styles from './styles';
import { BurgerButton } from './components/BurgerButton/BurgerButton';
import { ExternalLink } from './components/ExternalLink/ExternalLink';

const Header = () => {
  const windowScroll = useWindowScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    isEmpty(windowScroll.y) ? setScrolled(false) : setScrolled(true);
  }, [windowScroll]);

  useEffect(() => {
    mobileMenuOpened ? disableScroll() : enableScroll();
  }, [mobileMenuOpened]);

  const disableScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft;
    window.onscroll = () => window.scrollTo(scrollLeft, scrollTop);
  };

  const enableScroll = () => {
    window.onscroll = () => {};
  };

  return (
    <div className={`${mobileMenuOpened && styles.mobileOpened.container}`}>
      {scrolled && <div className={styles.scrolled.true.div.invisible} />}
      <header
        className={`${styles.default.header} ${
          scrolled ? styles.scrolled.true.header : styles.scrolled.false.header
        }`}
      >
        <BurgerButton opened={mobileMenuOpened} onClick={setMobileMenuOpened} />
        <img
          className={styles.default.logo}
          src="/assets/icons/256x256.png"
          alt="Logo"
        />
        <nav className={styles.default.nav.desktop}>
          <NavLink to="/">{t('Home')}</NavLink>
          {/* <NavLink to="/vote">{t('Vote')}</NavLink> */}
          <ExternalLink href="https://alcanderia.tebex.io/">
            {t('Shop')}
          </ExternalLink>
          <ExternalLink href="https://wiki.alcanderia.fr/">Wiki</ExternalLink>
        </nav>
        <div className={styles.default.rightSide}>
          <LanguageSwitch />
          <ThemeSwitch />
        </div>
      </header>
      <nav
        className={`${styles.default.nav.mobile} ${
          !mobileMenuOpened && styles.mobileNotOpened.nav
        } `}
      >
        <NavLink to="/" onClick={() => setMobileMenuOpened(false)}>
          {t('Home')}
        </NavLink>
        {/* <NavLink to="/vote" onClick={() => setMobileMenuOpened(false)}>
        {t('Vote')}
        </NavLink> */}
        <ExternalLink
          href="https://alcanderia.tebex.io/"
          setFalse={setMobileMenuOpened}
        >
          {t('Shop')}
        </ExternalLink>
        <ExternalLink
          href="https://wiki.alcanderia.fr/"
          setFalse={setMobileMenuOpened}
        >
          Wiki
        </ExternalLink>
      </nav>
    </div>
  );
};

export default Header;
