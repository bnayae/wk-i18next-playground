// import App from 'next/app'

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const languages = {
  en: { nativeName: 'English' },
  he: { nativeName: 'Hebrew' },
};

export const LangSwitcher = () => {
  const { t, i18n } = useTranslation();
  const [count, setCounter] = useState(0);

  const handleChange = (lng: string) => {
    i18n.changeLanguage(lng);
    setCounter((p) => p + 1);
  };
  return (
    <div>
      <header className="App-header">
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
        </div>{' '}
        <p>
          <i>{t('lang.counter', { count })}</i>
        </p>
      </header>
    </div>
  );
};
