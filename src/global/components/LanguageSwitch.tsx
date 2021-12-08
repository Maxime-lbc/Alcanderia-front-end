import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';

type lang = 'en' | 'fr';

export const LanguageSwitch = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState<lang>('fr');

  const changeLanguage = () => {
    switch (language) {
      case 'fr':
        i18n.changeLanguage('en');
        setLanguage('en');
        break;
      case 'en':
        i18n.changeLanguage('fr');
        setLanguage('fr');
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
      className="h-7 px-5 cursor-pointer"
      src={getFlag(language)}
      alt="fr"
    />
  );
};
