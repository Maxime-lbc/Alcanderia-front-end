import React from 'react';
import Carrousel from './features/Carrousel/Carrousel';
import Title from './components/Title/Title';
import MainWord from './components/MainWord/MainWord';
import Section from './components/Section/Section';
import Paragraph from './components/Paragraph/Paragraph';
import Illustration from './components/Illustration/Illustration';
import Socials from './components/Socials/Socials';
import { useTranslation } from 'react-i18next';
import styles from './styles';
import { DownloadButton } from './features/DownloadButton/DownloadButton';
import { DownloadsSection } from './components/DownloadsSection/DownloadsSection';

const Home = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className={styles.section}>
      <Carrousel />
      <Section>
        <Title>
          <MainWord>{t('WhatIs')}</MainWord> {t('isENOnly')}{' '}
          <br className={styles.br} /> Alcanderia ?
        </Title>
        <Paragraph>{t('alcanderiaDescription')}</Paragraph>
        <Illustration src="/assets/images/AlcaPres.png" alt="Illustration" />
        <div className={styles.div.invisible} />
      </Section>
      <Section inverted>
        <Title>
          {t('HowTo')} <MainWord>{t('join')}</MainWord> {t('usENOnly')} ?
        </Title>
        <Paragraph inverted>{t('joinText')}</Paragraph>
        <Socials />
        <div className={styles.div.invisible} />
      </Section>

      <DownloadsSection>
        <DownloadButton os="windows" />
        <DownloadButton os="linux" />
        <DownloadButton os="mac" />
      </DownloadsSection>


      <Section>
        <Title>
          {t('isAlcanderia')}{' '}
          <MainWord>
            free <br className={styles.br} /> to play
          </MainWord>{' '}
          ?
        </Title>
        <Paragraph>{t('F2PText')}</Paragraph>
        <Illustration src="/assets/images/freetoplay.png" alt="Illustration" />
        <div className={styles.div.invisible} />
      </Section>
    </section>
  );
};

export default Home;
