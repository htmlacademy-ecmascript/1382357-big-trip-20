import { EnabledSortType, SortType } from '../const.js';
import AbstractView from '../framework/view/abstract-view.js';

function getSortItem(sortItem) {
  return `
  <div class="trip-sort__item  trip-sort__item--${sortItem.type}">
  <input
    id="sort-${sortItem.type}"
    class="trip-sort__input  visually-hidden"
    type="radio"
    name="trip-sort"
    value="sort-${sortItem.type}"
    data-sort-type="${sortItem.type}"
    ${(sortItem.isChecked) ? 'checked' : ''}
    ${(sortItem.isDisabled) ? 'disabled' : ''}
  >
  <label
    class="trip-sort__btn"
    for="sort-${sortItem.type}">${sortItem.type}</label>
</div>
  `;
}

function createSortTemplate({sortMap}) {
  return `
    <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      ${sortMap.map((sortItem) => getSortItem(sortItem)).join('')}
    </form>
  `;
}

export default class SortView extends AbstractView {
  #sortMap = null;
  #onSortTypeChange = null;

  constructor({sortType, onSortTypeChange}) {
    super();

    this.#sortMap = Object.values(SortType)
      .map((type) => ({
        type,
        isChecked: (type === sortType),
        isDisabled: !EnabledSortType[type]
      }));

    this.#onSortTypeChange = onSortTypeChange;

    this.element.addEventListener('change', this.#sortTypeChangeHandler);
  }

  get template() {
    return createSortTemplate({sortMap: this.#sortMap});
  }

  #sortTypeChangeHandler = (evt) => {
    evt.preventDefault();
    this.#onSortTypeChange(evt.target.dataset.sortType);
  };
}
