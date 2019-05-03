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

  fetchHomeworld = link => {
    fetch(link)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          homeworld: data.name
        })
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  fetchSpecies = link => {
    fetch(link)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          species: data.name
        })
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  fetchVehicles = link => {
    fetch(link)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          vehicles: [...this.state.vehicles, data.name]
        })
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  fetchShips = link => {
    fetch(link)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          ships: [...this.state.ships, data.name]
        })
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  fetchFilms = link => {
    fetch(link)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          films: [...this.state.films, `Episode ${data.episode_id}: ${data.title}`].sort((a, b) => +a[8] - +b[8])
        })
      })
      .catch(err => {
        throw new Error(err);
      });
  }


};

export default StarWarsChar;
