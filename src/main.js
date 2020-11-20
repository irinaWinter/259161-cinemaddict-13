import {createProfileTemplate} from "./view/profile.js";
import {createSiteMenuTemplate} from "./view/site-menu.js";
import {createSortTemplate} from "./view/sort.js";
import {createContentTemplate} from "./view/content.js";
import {createFilmListTemplate} from "./view/film-list.js";
import {createFilmTopTemplate} from "./view/film-top.js";
import {createFilmMostComentedTemplate} from "./view/film-most-comented.js";
import {createFilmTemplate} from "./view/film.js";
import {createShowMoreButtonTemplate} from "./view/show-more.js";
import {createFilmDetaildTemplate} from "./view/film-details.js";
import {createMovieCounterTemplate} from "./view/movie-counter.js";

const Count = {
  FILM: 5,
  FILM_EXTRA: 2
};

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector(`.header`);

render(siteHeaderElement, createProfileTemplate(), `beforeend`);

const siteMainElement = document.querySelector(`.main`);

render(siteMainElement, createSiteMenuTemplate(), `beforeend`);
render(siteMainElement, createSortTemplate(), `beforeend`);
render(siteMainElement, createContentTemplate(), `beforeend`);

const contentElement = siteMainElement.querySelector(`.films`);

render(contentElement, createFilmListTemplate(), `beforeend`);

const filmListElement = siteMainElement.querySelector(`.films-list`);
const filmListContainerElement = filmListElement.querySelector(`.films-list__container`);

for (let i = 0; i < Count.FILM; i++) {
  render(filmListContainerElement, createFilmTemplate(), `beforeend`);
}

render(filmListContainerElement, createShowMoreButtonTemplate(), `beforeend`);

render(contentElement, createFilmTopTemplate(), `beforeend`);
render(contentElement, createFilmMostComentedTemplate(), `beforeend`);

const filmListExtraContainerElements = contentElement.querySelectorAll(`.films-list--extra .films-list__container`);

filmListExtraContainerElements.forEach((item) => {
  for (let i = 0; i < Count.FILM_EXTRA; i++) {
    render(item, createFilmTemplate(), `beforeend`);
  }
});

const siteFooterElement = document.querySelector(`.footer`);

render(siteFooterElement, createFilmDetaildTemplate(), `afterend`);

const siteStatisticsElement = siteFooterElement.querySelector(`.footer__statistics`);

render(siteStatisticsElement, createMovieCounterTemplate(), `beforeend`);
