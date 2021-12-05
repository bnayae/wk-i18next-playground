import { appWithTranslation } from 'next-i18next';
import App from 'next/app';
import React from 'react';
import { LangSwitcher } from '../@localization';
import { Layout } from '../components';
import nextI18NextConfig from '../next-i18next.config.js';

const MyApp = ({ Component, pageProps }) => {
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

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default appWithTranslation(MyApp, nextI18NextConfig);
