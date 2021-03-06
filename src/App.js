import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TransportationContainer from './components/Transportation/TransportationContainer';
import WeatherContainer from './components/Weather/WeatherContainer';

class App extends Component {
  render() {
    let container = {
      marginBottom: '2rem'
    }

    return (
      <div className="App">
        <div className="container">
          <div style={container}>
            <WeatherContainer />
          </div>
          <div style={container}>
            <TransportationContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
