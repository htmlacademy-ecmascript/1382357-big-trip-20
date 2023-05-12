import dayjs from 'dayjs';
import { getRandomIntenger } from '../utils.js';
import { Duration } from './const.js';

let date = dayjs().subtract(getRandomIntenger(0, Duration.DAY), 'day').toDate();

function getDate({next}) {
  const minsGap = getRandomIntenger(0, Duration.MIN);
  const hoursGap = getRandomIntenger(1, Duration.HOUR);
  const daysGap = getRandomIntenger(0, Duration.DAY);

  if (next) {
    date = dayjs(date)
      .add(minsGap, 'minute')
      .add(hoursGap, 'hour')
      .add(daysGap, 'day')
      .toDate();
  }

  return date;
}

export {getDate};
