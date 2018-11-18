import React, { Component } from 'react';

import './App.css';
import SearchBar from './components/search_bar';
import WeatherList from './components/weather_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cityName : []
    }
  }

  getCityName = (city) => {
    this.setState({ cityName: [...this.state.cityName, city] })
  }

  render() {
    return (
      <div className="App">
        <SearchBar cityName={city => this.getCityName(city)} />
        <WeatherList city={this.state.cityName}/>
      </div>
    );
  }
}

export default App;
