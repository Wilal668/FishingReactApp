import React, { useState } from 'react';

import OleśnikowaDolinaPhoto from './img/oleśnikowa-dolina.png';
import EbroPhoto from './img/ebro.png';
import EkoFarmaPhoto from './img/ekofarma.png';
import WedkaPhoto from './img/gear-wedka.jpg';
import KolowrotekPhoto from './img/gear-kolowrotek.jpg';
import PrzynetyPhoto from './img/gear-przynety.jpg';

function ServicesPage() {
  const [fishingSpots, setFishingSpots] = useState([
    {
      name: 'Oleśnikowa Dolina',
      location: 'Polska, Oleśnik 1, 05-620',
      photo: OleśnikowaDolinaPhoto,
    },
    {
      name: 'Rzeka Ebro',
      location: '50691, Saragossa, Hiszpania',
      photo: EbroPhoto,
    },
    {
      name: 'EkoFarma',
      location: 'Polska, Pałacowa 58, 96-321 Grzegorzewice',
      photo: EkoFarmaPhoto,
    },
  ]);

  const [fishingGear, setFishingGear] = useState([
    { name: 'Wędka', price: 50, photo: WedkaPhoto },
    { name: 'Kołowrotek', price: 30, photo: KolowrotekPhoto },
    { name: 'Przynęty', price: 20, photo: PrzynetyPhoto},
  ]);

  const [selectedSpot, setSelectedSpot] = useState(null);
  const [cart, setCart] = useState([]);
  const [accommodationPrice, setAccommodationPrice] = useState(0);

  const handleSpotSelect = (spot) => {
    setSelectedSpot(spot);
  };

  const handleAddToCart = (gear) => {
    setCart([...cart, gear]);
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const calculateCartValue = () => {
    return cart.reduce((total, gear) => {
      return total + gear.price;
    }, 0);
  };

  const calculateTotalPrice = () => {
    const gearTotal = calculateCartValue();
    return gearTotal + accommodationPrice;
  };

  return (
    <div className="services-page">
      <h1>Services:</h1>
      <h2>Fishing Spots</h2>
      <ul>
        {fishingSpots.map((spot) => (
          <li key={spot.name}>
            <img src={spot.photo} alt={spot.name} />
            <span onClick={() => handleSpotSelect(spot)}>
              {spot.name}
            </span>
          </li>
        ))}
      </ul>

      {selectedSpot && (
        <div className="selected-spot">
          <h3>Selected Spot: {selectedSpot.name}</h3>
          <img src={selectedSpot.photo} alt={selectedSpot.name} />
          <p>Location: {selectedSpot.location}</p>
          <input type="number" placeholder="wpisz swoje koszta pobytu" onChange={(e) => setAccommodationPrice(parseInt(e.target.value))} />
        </div>
      )}

      <h2>Fishing Gear</h2>
      <ul>
        {fishingGear.map((gear) => (
          <li key={gear.name}>
            <img src={gear.photo} alt={gear.name}/>
            <span onClick={() => handleAddToCart(gear)}>
              {gear.name} (${gear.price})
            </span>
          </li>
        ))}
      </ul>

      <h2>Cart</h2>
      <ul className="cart">
        {cart.map((gear) => (
          <li key={gear.name}>
            <img src={gear.photo} alt={gear.name}/>
            {gear.name} (${gear.price})
          </li>
        ))}
      </ul>

      <p>Cart value: (${calculateCartValue()})</p>
      <p>Total Price: ${calculateTotalPrice()}</p>
      <button className="cart-button" onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
}

export default ServicesPage;
