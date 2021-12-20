/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useLocalStorage } from 'react-use';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../global/redux/hooks';
import { switchTheme } from '../../../../../global/redux/slices/themeSlice';
import { Themes } from '../../../../../global/enums/themes.enum';
import styles from './styles';

const urls = {
  light: '/assets/images/sun.svg',
  dark: '/assets/images/moon.svg',
};

const ThemeSwitch = () => {
  const theme = useAppSelector(state => state.themeReducer.value);
  const dispatch = useAppDispatch();
  const [value, setValue] = useLocalStorage('alcanderia.theme', Themes.LIGHT);

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
    <div className={styles.container} onClick={() => dispatch(switchTheme())}>
      <img
        src={theme === 'light' ? urls.light : urls.dark}
        alt={theme === 'light' ? 'Light theme' : 'Dark theme'}
        className={`${styles.img.default} ${
          theme !== 'light' && styles.img.dark
        } `}
      />
    </div>
  );
};

export default ThemeSwitch;
