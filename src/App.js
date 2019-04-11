import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TransportationContainer from './components/Transportation/TransportationContainer';
import WeatherContainer from './components/Weather/WeatherContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <TransportationContainer />
          <WeatherContainer />
        </div>
      </div>
    );
  }
}

export default App;
