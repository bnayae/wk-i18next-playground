import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

interface IProps {
  data: ITask;
}

interface ITask {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const AboutPage = ({ data }: IProps) => {
  const { t, ready } = useTranslation(['common', 'screens/about']);

  if (!ready) return <></>;

  return (
    <div>
      <h1>{t('caption')}</h1>
      <p>{data.title}</p>
      <p>
        <Link href="/">
          <a>{t('home')}</a>
        </Link>
      </p>
    </div>
  );
};

export async function getServerSideProps({ locale }) {
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
  const data: ITask = await res.json();

  // Pass data to the page via props
  return {
    props: {
      ...(await serverSideTranslations(locale, ['screens/about', 'common'])),
      data,
    },
  };
}

export default AboutPage;
