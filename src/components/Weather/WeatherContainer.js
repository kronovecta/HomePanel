import React, { Component } from 'react'
import CurrentWeather from './CurrentWeather'

export default class WeatherContainer extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      currentWeather: { name: "Null", temp: 0, wind: 0, temp_min: 0, temp_max: 0, icon: null, sunrise: "00:00", sunset: "00:00" },
      currentPosition: { lat: 0, long: 0 }
    }
  }

  getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.fetchWeather, null, { enableHighAccuracy: false });
    }else {
      console.log("Position failed")
    }
    
    return;
  }

  fetchWeather = (location) => {    
    let API_KEY = process.env.REACT_APP_OPENWEATHERMAP_KEY;
    const lat = location.coords.latitude;
    const long = location.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`

    fetch(url)
    .then(response => response.json())
    .then(json => this.setState({ currentWeather: {
        name: json.name, 
        temp:Math.ceil(json.main.temp), 
        wind: json.wind.speed, 
        temp_min: Math.ceil(json.main.temp_min), 
        temp_max: Math.ceil(json.main.temp_max), 
        icon: json.weather[0].id,
        sunrise: json.sys.sunrise,
        sunset: json.sys.sunset,
    }}))
  }

  componentDidMount() {
    this.getLocation();
  }
  
  render() {
    return (
      <React.Fragment>
        <CurrentWeather data={this.state.currentWeather} />
      </React.Fragment>
    )
  }
}
