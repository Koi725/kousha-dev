'use client';

import React from "react";
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import "../../../tailwind/components/home/home.css";
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
          <button className="home-cta">{t('home.cta')}</button>
        </div>
        <div className="home-right">
          {/* <Image
          src="/images/IMG_3207.JPG"
          alt="Kousha"
          width={350}
          height={350}
          priority
          className="home-image"
          /> */}
        </div>
      </div>
      <FaChevronDown className="scroll-down-icon" />
    </section>
  );
};

export default Home;
