/* eslint-disable react-hooks/exhaustive-deps */
import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react';
import { Languages } from '../../enums/languages.enum';
import { useLocalStorage } from 'react-use';
import styles from './styles';

type lang = Languages.EN | Languages.FR;

export const LanguageSwitch = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState<lang>(Languages.FR);
  const [value, setValue] = useLocalStorage(
    'alcanderia.language',
    Languages.FR,
  );

  // Put language choice in the local storage for next time
  useEffect(() => {
    if (language === Languages.FR) setValue(Languages.FR);
    if (language === Languages.EN) setValue(Languages.EN);
  }, [language]);

  // Apply last time language choice
  useEffect(() => {
    if (value === Languages.EN) changeLanguage();
  }, []);

  const changeLanguage = () => {
    switch (language) {
      case Languages.FR:
        i18n.changeLanguage(Languages.EN);
        setLanguage(Languages.EN);
        break;
      case Languages.EN:
        i18n.changeLanguage(Languages.FR);
        setLanguage(Languages.FR);
        break;
      default:
        break;
    }
  };

  const getFlag = (language: lang) => {
    switch (language) {
      case 'fr':
        return '/assets/images/lang/fr.png';
      case 'en':
        return '/assets/images/lang/en.png';
      default:
        return '/assets/images/lang/fr.png';
    }
  };

  return (
    <img
      onClick={() => changeLanguage()}
      className={styles.img}
      src={getFlag(language)}
      alt={language}
    />
  );
};
