// import App from 'next/app'

// see: https://dev.to/adrai/how-to-properly-internationalize-a-react-application-using-i18next-3hdb

import React from 'react';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from '../@localization';
import '../@localization/i18n';
import { Layout } from '../components';

const lngs = {
  en: { nativeName: 'English' },
  he: { nativeName: 'Hebrew' },
};

const MyApp = ({ Component, pageProps }) => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <LangSwitcher />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <a
        href="https://dev.to/adrai/how-to-properly-internationalize-a-react-application-using-i18next-3hdb"
        target="_blank"
      >
        credit
      </a>
    </div>
  );
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
