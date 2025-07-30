'use client';

import React from "react";
import { useTranslations } from 'next-intl';
import "../../../tailwind/components/home/home.css";
import { FaChevronDown } from "react-icons/fa";

const Home: React.FC = () => {
  const t = useTranslations();

  return (
    <section className="home-section">
      <h1 className="home-title">{t('home.title')}</h1>
      <p className="home-subtitle">{t('home.subtitle')}</p>
      <FaChevronDown className="scroll-down-icon" />
    </section>
  );
};

export default Home;
