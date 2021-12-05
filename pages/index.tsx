import Link from 'next/link';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import Layout from '../components/Layout';

const IndexPage = () => {
  const { t } = useTranslation();

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>
        <Trans i18nKey="main.hello">
          Hello <code>src/index.ts</code>.
        </Trans>
      </h1>
      <p>
        <Link href="/about">
          <a>{t('main.about')}</a>
        </Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
