import Map from '../map/map';
import Offers from '../offers/offers';
import { useAppSelector } from '../../hooks';
import { selectOffersByCity } from '../../store/offers/offers-selector';

function MainOffers() {
  const offers = useAppSelector(selectOffersByCity);

  // TODO: Скролл при смене города!

  return (
    <div className="cities__places-container container">
      <Offers
        offers={offers}
      />
      <div className="cities__right-section">
        <Map
          classBlock='cities'
          offers={offers}
        />
      </div>
    </div>
  );
}

export default MainOffers;
