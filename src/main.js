import {render, RenderPosition} from './framework/render.js';
import TripInfoView from './view/trip-info-view.js';
import FilterView from './view/filter-view.js';
import BoardPresenter from './presenter/board-presenter.js';
import MockService from './service/mock-service.js';
import DestinationsModel from './model/destination-model.js';
import OffersModel from './model/offers-model.js';
import PointsModel from './model/points-model.js';

const bodyElement = document.querySelector('body');
const tripInfoElement = document.querySelector('.trip-main');
const filterElement = tripInfoElement.querySelector('.trip-controls__filters');
const mainElement = bodyElement.querySelector('.page-main');
const eventListElement = mainElement.querySelector('.trip-events');

const mockService = new MockService();
const destinationsModel = new DestinationsModel(mockService);
const offersModel = new OffersModel(mockService);
const pointsModel = new PointsModel(mockService);

const boardPresenter = new BoardPresenter({
  container: eventListElement,
  destinationsModel,
  offersModel,
  pointsModel
});

render(new TripInfoView(), tripInfoElement, RenderPosition.AFTERBEGIN);
render(new FilterView(), filterElement);

boardPresenter.init();
