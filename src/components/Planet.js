import React from 'react';

import './style/Planet.css';
import imgPlanet from '../img/planet0.gif';

const Planet = () =>
  <div>
    <img className="img-planet" src={imgPlanet} alt="planet" />
  </div>;

export default Planet;
