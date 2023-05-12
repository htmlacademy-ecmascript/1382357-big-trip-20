import { getRandomIntenger, getRandomValue } from '../utils.js';
import { OFFERS, Price } from './const.js';

function generateOffer() {
  const offer = getRandomValue(OFFERS);

  return {
    id: crypto.randomUUID(),
    title: offer,
    price: getRandomIntenger(Price.MIN, (Price.MAX / 10))
  };
}

export {generateOffer};
