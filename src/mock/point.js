import { getRandomIntenger } from '../utils.js';
import { Price } from './const.js';
import { getDate } from './utils.js';

function generatePoint(type, destinationId, offerIds) {
  return {
    id: crypto.randomUUID(),
    basePrice: getRandomIntenger(Price.MIN, Price.MAX),
    dateFrom: getDate({next: false}),
    dateTo: getDate({next: true}),
    destination: destinationId,
    isFavorite: !!getRandomIntenger(0, 1),
    offers: offerIds,
    type
  };
}

export {generatePoint};
