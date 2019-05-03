import React, { Component } from 'react';
import './App.css';
import StarWarsCharsList from './components/StarWarsCharsComponents/StarWarsCharsList';


class App extends Component {
  constructor() {
    super();
    this.state = {
      prevPage: "",
      nextPage: "",
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    let chars = []
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        chars = data.results
        this.setState({
          prevPage: data.previous,
          nextPage: data.next,
          starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });

      return chars;
  };

  nextPage = () => {
    this.getCharacters(this.state.nextPage);
  }

  prevPage = () => {
    this.getCharacters(this.state.nextPage);
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
      </div>
    );
  }
}

export default App;
