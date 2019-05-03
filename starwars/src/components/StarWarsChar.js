import React from 'react';

import './StarWarsChars.css';

class StarWarsChar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      homeworld: "",
      species: "",
      vehicles: [],
      ships: [],
      films: []
    };

    [
      this.charName,
      this.charBirthYear,
      this.charGender,
      this.charHairColor,
      this.charSkinColor,
      this.charHeight,
      this.charMass
    ] = [
      props.charName,
      props.charBirthYear,
      props.charGender,
      props.charHairColor,
      props.charSkinColor,
      props.charHeight,
      props.charMass
    ];

    this.fetchHomeworld(props.charHomeworld);
    this.fetchSpecies(props.charSpecies);
    props.charVehicles.forEach(vehicle => this.fetchVehicles(vehicle));
    props.charStarships.forEach(ship => this.fetchShips(ship));
    props.charFilms.forEach(film => this.fetchFilms(film));
  }
};

export default StarWarsChar;
