import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../global/redux/hooks';
import { switchTheme } from '../../../../global/redux/slices/themeSlice';

const urls = {
  light: '/assets/images/sun.svg',
  dark: '/assets/images/moon.svg',
};

const ThemeSwitch = () => {
  const theme = useAppSelector(state => state.themeReducer.value);
  const dispatch = useAppDispatch();

  return (
    <div
      className="px-5 mr-5 relative inline-block w-16 h-7 bg-gray-250 dark:bg-gray-600 rounded-full shadow-inner cursor-pointer"
      onClick={() => dispatch(switchTheme())}
    >
      <img
        src={theme === 'light' ? urls.light : urls.dark}
        alt={theme === 'light' ? 'Light theme' : 'Dark theme'}
        className={`h-7 absolute left-0 ${
          theme !== 'light' && 'transform translate-x-8'
        } transition duration-1000`}
      />
    </div>
  );
};

export default ThemeSwitch;
