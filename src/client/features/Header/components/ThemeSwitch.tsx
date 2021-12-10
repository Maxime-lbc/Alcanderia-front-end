/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useLocalStorage } from 'react-use';
import { useAppDispatch, useAppSelector } from '../../../../global/redux/hooks';
import { switchTheme } from '../../../../global/redux/slices/themeSlice';
import { Themes } from '../../../../global/enums/themes.enum';

const urls = {
  light: '/assets/images/sun.svg',
  dark: '/assets/images/moon.svg',
};

const ThemeSwitch = () => {
  const theme = useAppSelector(state => state.themeReducer.value);
  const dispatch = useAppDispatch();
  const [value, setValue, remove] = useLocalStorage(
    'alcanderia.theme',
    Themes.LIGHT,
  );

  // Put theme choice in the local storage for next time
  useEffect(() => {
    if (theme === 'light') setValue(Themes.LIGHT);
    if (theme === 'dark') setValue(Themes.DARK);
  }, [theme]);

  // Apply last time theme choice
  useEffect(() => {
    if (value === Themes.DARK) dispatch(switchTheme());
  }, []);

  return (
    <div
      className="px-5 mr-5 relative inline-block w-16 h-7 bg-gray-600 dark:bg-gray-600 rounded-full cursor-pointer"
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
