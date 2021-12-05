import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { DateTime } from 'luxon';
import { initReactI18next } from 'react-i18next';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
      format: (value, format, lng) => {
        if (value instanceof Date) {
          return DateTime.fromJSDate(value)
            .setLocale(lng)
            .toLocaleString(DateTime[format]);
        }
        return value;
      },
    },
    resources: {
      en: {
        translation: {
          main: {
            hello: 'Hi <1>index.ts</1>  👋',
            about: 'Go to About',
          },
          lang: {
            counter_zero: "Language didn't changed",
            counter_one: 'Changed language just once',
            counter_other: 'Changed language already {{count}} times',
          },
          footer: {
            date: 'Today is {{date, DATE_HUGE}}',
            date_morning:
              'Good morning! Today is {{date, DATE_HUGE}} | Have a nice day!',
            date_afternoon: "Good afternoon! It's {{date, DATE_HUGE}}",
            date_evening: 'Good evening! Today was the {{date, DATE_HUGE}}',
          },
        },
      },
      he: {
        translation: {
          main: {
            hello: '👋 <1>index.ts</1>  הי',
            about: 'אודות',
          },
          lang: {
            counter_zero: 'לא חל שינוי בשפה',
            counter_one: 'שפה השתנתה פעם אחת',
            counter_other: 'פעמים {{count}} השפה השתנתה',
          },
          footer: {
            date: 'היום {{date, DATE_HUGE}}',
            date_morning: 'בוקר טוב {{date, DATE_HUGE}} | שמחה ואושר',
            date_afternoon: 'אחר צהריים טובים {{date, DATE_HUGE}}',
            date_evening: 'ערב טוב {{date, DATE_HUGE}}',
          },
        },
      },
    },
  });

export default i18n;
