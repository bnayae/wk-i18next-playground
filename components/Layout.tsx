import Link from 'next/link';
import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

type Props = {
  children?: ReactNode;
};

export const Layout = ({ children }: Props) => {
  const { t } = useTranslation();

  return (
    <div>
      <header>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>{' '}
          |{' '}
          <Link href="/about">
            <a>About</a>
          </Link>{' '}
          |{' '}
          <Link href="/users">
            <a>Users List</a>
          </Link>{' '}
          | <a href="/api/users">Users API</a>
        </nav>
      </header>
      {children}
      <footer>
        <hr />
        <span>{t('footer.date', { date: new Date() })}</span>
      </footer>
    </div>
  );
};
