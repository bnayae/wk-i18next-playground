import { DateTime } from 'luxon';
import { useTranslation } from 'react-i18next';

const getGreetingTime = (d = DateTime.now()) => {
  const split_afternoon = 12; // 24hr time to split the afternoon
  const split_evening = 17; // 24hr time to split the evening
  const currentHour = parseFloat(d.toFormat('hh'));

  if (currentHour >= split_afternoon && currentHour <= split_evening) {
    return 'afternoon';
  } else if (currentHour >= split_evening) {
    return 'evening';
  }
  return 'morning';
};

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="Footer">
      <hr />
      <div>
        {t('footer.date', { date: new Date(), context: getGreetingTime() })}
      </div>
      <div>{t('footer.date', { date: new Date(), context: undefined })}</div>
      <hr />
    </div>
  );
};
