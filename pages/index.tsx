import Link from 'next/link';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

const IndexPage = () => {
  const { t } = useTranslation();

  return (
    <div>
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
    </div>
  );
};

export default IndexPage;
