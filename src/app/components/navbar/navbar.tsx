'use client';

import React, { useState } from "react";
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale; // replace locale segment
    const newPath = segments.join('/');
    router.push(newPath);
    setShowDropdown(false); // Close dropdown after selection
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <ul className="navbar__menu">
          <li className="navbar__item"><a href="#home">{t('navbar.home')}</a></li>
          <li className="navbar__item"><a href="#about">{t('navbar.about')}</a></li>
          <li className="navbar__item"><a href="#skills">{t('navbar.skills')}</a></li>
          <li className="navbar__item"><a href="#contact">{t('navbar.contact')}</a></li>
        </ul>

        <div className="navbar__lang-wrapper" onClick={() => setShowDropdown(!showDropdown)}>
          <button className="lang-toggle">🌐 {t(`navbar.${locale}`)} ▾</button>
          {showDropdown && (
            <div className="lang-dropdown">
              <button className="lang-option" onClick={() => handleLocaleChange('en')}>
                {t('navbar.en')}
              </button>
              <button className="lang-option" onClick={() => handleLocaleChange('fa')}>
                {t('navbar.fa')}
              </button>
              <button className="lang-option" onClick={() => handleLocaleChange('pt')}>
                {t('navbar.pt')}
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
