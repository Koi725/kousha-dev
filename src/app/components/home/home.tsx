'use client';

import React from "react";
import { useTranslations } from 'next-intl';
import "@/tailwind/components/home/home.css";
import { FaChevronDown } from "react-icons/fa";

const Home: React.FC = () => {
  const t = useTranslations();

  return (
    <section className="home-section" id="home">
      <div className="home-container">
        <div className="home-left">
          <h1 className="home-title">{t('home.title')}</h1>
          <p className="home-subtitle">{t('home.subtitle')}</p>
          <p className="home-caption">{t('home.caption')}</p>
          <a
            href="https://calendly.com/kousha-rezaei-ua/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="home-cta"
          >
            {t('home.cta')}
          </a>
        </div>

        <div className="home-right">
          {}
        </div>
      </div>
      <FaChevronDown className="scroll-down-icon" />
    </section>
  );
};

export default Home;
