// import App from 'next/app'

import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const languages = {
  en: { nativeName: 'English' },
  he: { nativeName: 'Hebrew' },
};

export const LangSwitcher = () => {
  const router = useRouter();
  const { t, i18n, ready } = useTranslation('components.lang');
  const [count, setCounter] = useState(0);

  const handleChange = (lng: string) => {
    // i18n.changeLanguage(lng);
    setCounter((p) => p + 1);
    router.push('/', '/', { locale: lng });
  };

  if (!ready) return <></>;

  return (
    <div>
      <header className="App-header">
        <Link href="/" locale={router.locale === 'en' ? 'he' : 'en'}>
          <button
            onClick={() => handleChange(router.locale === 'en' ? 'he' : 'en')}
          >
            {t('change-locale')}
          </button>
        </Link>
        <div>
          {Object.keys(languages).map((lng) => (
            <button
              key={lng}
              style={{
                fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal',
              }}
              type="submit"
              onClick={() => handleChange(lng)}
            >
              {languages[lng].nativeName}
            </button>
          ))}
        </div>
        <p>
          <i>{t('counter', { count })}</i>
        </p>
      </header>
    </div>
  );
};
