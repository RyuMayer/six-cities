import { createSelector } from '@reduxjs/toolkit';
import { State } from '../../types/state';
import { NameSpace } from '../../const';

const selectCity = (state: State) => state[NameSpace.Offers].city;

const selectOffersLoadingStatus = (state: State) => state[NameSpace.Offers].loadingStatus;

const selectActiveOffer = (state: State) => state[NameSpace.Offers].active;

const selectOffersByCity = createSelector(
  [(state: State) => state[NameSpace.Offers].city, (state: State) => state[NameSpace.Offers].data],
  (city, offers) => offers.filter((offer) => offer.city.name === city)
);

export {
  selectOffersByCity,
  selectCity,
  selectOffersLoadingStatus,
  selectActiveOffer
};
