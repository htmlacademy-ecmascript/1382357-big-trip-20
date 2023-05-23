import { SortType } from '../const.js';
import { getPointsDateDifference, getPointsDurationDifference, getPointsPriceDifference } from '../utils.js';

if (!Array.prototype.toSorted) {
  Array.prototype.toSorted = function(fn) {
    return [...this].sort(fn);
  };
}

// const sort = {
//   [SortType.DAY]: (points) => points.toSorted(getPointsDateDifference),
//   [SortType.PRICE]: (points) => points.toSorted(getPointsPriceDifference),
//   [SortType.TIME]: (points) => points.toSorted(getPointsDurationDifference),
//   [SortType.EVENT]: () => {
//     throw new Error(`Sort by ${SortType.EVENT} is not implemented`);
//   },
//   [SortType.OFFERS]: () => {
//     throw new Error(`Sort by ${SortType.OFFERS} is not implemented`);
//   }
// };

const sort = {
  [SortType.DAY]: (points) => points.sort(getPointsDateDifference),
  [SortType.PRICE]: (points) => points.sort(getPointsPriceDifference),
  [SortType.TIME]: (points) => points.sort(getPointsDurationDifference),
  [SortType.EVENT]: () => {
    throw new Error(`Sort by ${SortType.EVENT} is not implemented`);
  },
  [SortType.OFFERS]: () => {
    throw new Error(`Sort by ${SortType.OFFERS} is not implemented`);
  }
};

export {sort};
