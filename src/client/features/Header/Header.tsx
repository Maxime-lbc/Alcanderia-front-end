import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useWindowScroll } from 'react-use';
import { isEmpty } from '../../../global/utils/utils';
import NavLink from './components/NavLink';
import ThemeSwitch from './components/ThemeSwitch';
import { LanguageSwitch } from '../../../global/components/LanguageSwitch';

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
    // Get the current page scroll position
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft;
    // if any scroll is attempted, set this to the previous value
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  };

  const enableScroll = () => {
    window.onscroll = function () {};
  };

  return (
    <div className={`${mobileMenuOpened && 'h-screen'}`}>
      {scrolled && <div className="w-screen h-30" />}
      <header
        className={`overflow-x-hidden bg-gray-50 dark:bg-gray-900 z-10 w-screen px-5 py-5 transition duration-700 ${
          scrolled ? 'h-1/6 sm:h-28 shadow-lg fixed top-0' : 'h-1/6 sm:h-28'
        } flex flex-nowrap flex-row justify-between content-center items-center`}
      >
        <div
          className="sm:hidden"
          onClick={() => setMobileMenuOpened(!mobileMenuOpened)}
        >
          <div
            className={`w-7 h-1 bg-black transform dark:bg-gray-100 rounded-full my-1 duration-700 ${
              mobileMenuOpened && '-rotate-45 translate-y-2'
            }`}
          ></div>
          <div
            className={`w-9 h-1 bg-black dark:bg-gray-100 rounded-full my-1 transform duration-700 ${
              mobileMenuOpened && 'scale-0'
            } `}
          ></div>
          <div
            className={`${
              !mobileMenuOpened && 'w-8'
            } h-1 bg-black dark:bg-gray-100 rounded-full my-1 transform duration-700 ${
              mobileMenuOpened && 'w-7 rotate-45 -translate-y-2'
            }`}
          ></div>
        </div>
        <img className="h-20" src="/assets/icons/256x256.png" alt="Logo" />
        <nav className="hidden sm:block">
          <NavLink to="/">{t('Home')}</NavLink>
          {/* <NavLink to="/vote">{t('Vote')}</NavLink> */}
          <a
            href="https://alcanderia.tebex.io/"
            className="font-semibold text-xl dark:text-gray-100 dark:hover:text-indigo-600 hover:text-indigo-600 mx-10"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('Shop')}
          </a>
          <a
            href="https://wiki.alcanderia.fr/"
            className="font-semibold text-xl dark:text-gray-100 dark:hover:text-indigo-600 hover:text-indigo-600 mx-10"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wiki
          </a>
        </nav>
        <div className="flex">
          <LanguageSwitch />
          <ThemeSwitch/>
        </div>
      </header>
      <nav
        className={`sm:hidden ${
          !mobileMenuOpened && 'hidden'
        } z-20 h-5/6 transform w-screen fixed bottom-0 flex bg-gray-50 dark:bg-gray-900 flex-col content-center items-center justify-around`}
      >
        <NavLink to="/" onClick={() => setMobileMenuOpened(false)}>
        {t('Home')}
        </NavLink>
        {/* <NavLink to="/vote" onClick={() => setMobileMenuOpened(false)}>
        {t('Vote')}
        </NavLink> */}
        <a
          href="https://alcanderia.tebex.io/"
          className="font-semibold text-xl dark:text-gray-100 dark:hover:text-indigo-600 hover:text-indigo-600 mx-10"
          onClick={() => setMobileMenuOpened(false)}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('Shop')}
        </a>
        <a
          href="https://wiki.alcanderia.fr/"
          className="font-semibold text-xl dark:text-gray-100 dark:hover:text-indigo-600 hover:text-indigo-600 mx-10"
          onClick={() => setMobileMenuOpened(false)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Wiki
        </a>
      </nav>
    </div>
  );
};

export default Header;
