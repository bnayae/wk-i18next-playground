import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import React, { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';

const IndexPage = () => {
  const { t, ready } = useTranslation();
  // const { t, ready } = useTranslation(['components:lang', 'common']);
  const [count, setCounter] = useState(0);

  if (!ready) return <></>;

  return (
    <div>
      <h1>
        <Trans i18nKey="hello">
          Hello <code>src/index.ts</code>.
        </Trans>
      </h1>
      <button onClick={() => setCounter((p) => p + 1)}>
        {t('screens.main:counter', { count })}
      </button>
      <h1>{t('screens.main:desc')}</h1>
      <p>
        <Link href="/about">
          <a>{t('common:about')}</a>
        </Link>
      </p>
    </div>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      'common',
      'screens.main',
      'components.lang',
      'footer',
    ])),
    // Will be passed to the page component as props
  },
  // if using the approach with the live translation download, meaning using i18next-locize-backend on server side,
  // there is a reloadInterval for i18next-locize-backend that can be used to reload resources in a specific interval: https://github.com/locize/i18next-locize-backend#backend-options
  // doing so it is suggested to also use the revalidate option, here:
  // Next.js will attempt to re-generate the page:
  // - When a request comes in
  // - At most once every hour
  // revalidate: 60 * 60, // in seconds
});

export default IndexPage;
