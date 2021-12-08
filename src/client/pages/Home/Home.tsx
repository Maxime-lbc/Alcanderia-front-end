import React from 'react';
import Carrousel from './features/Carrousel/Carrousel';
import Title from './components/Title';
import MainWord from './components/MainWord';
import Section from './components/Section';
import Paragraph from './components/Paragraph';
import Illustration from './components/Illustration';
import Socials from './components/Socials';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <section id="home overflow-hidden">
      <Carrousel />
      <Section>
        <Title>
          <MainWord>{t('WhatIs')}</MainWord> {t('isENOnly')} <br className="block sm:hidden" />{' '}
          Alcanderia ?
        </Title>
        <Paragraph>
          {t('alcanderiaDescription')}
        </Paragraph>
        <Illustration src="/assets/images/AlcaPres.png" alt="Illustration" />
        <div className="hidden md:block" />
      </Section>
      <Section inverted>
        <Title>
        {t('HowTo')} <MainWord>{t('join')}</MainWord> {t('usENOnly')} ?
        </Title>
        <Paragraph inverted>
          {t('joinText')}
        </Paragraph>
        <Socials />
        <div className="hidden md:block" />
      </Section>
      <Section>
        <Title>
        {t('isAlcanderia')}{' '}
          <MainWord>
            free <br className="block sm:hidden" /> to play
          </MainWord>{' '}
          ?
        </Title>
        <Paragraph>
        {t('F2PText')}
        </Paragraph>
        <Illustration src="/assets/images/freetoplay.png" alt="Illustration" />
        <div className="hidden md:block" />
      </Section>
    </section>
  );
};

export default Home;
