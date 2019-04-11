import React from 'react'
import '../../css/weather-icons.min.css';

const CurrentWeather = ({ data }) => {
    let container = {
        width:'100%',
        display:'flex', 
        flexDirection:'row', 
        justifyContent: 'space-between',
        alignItems: 'center',
    }
    let sectionLeft = {
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    }

    let sectionRight = {}
    
    let iconString = "wi wi-owm-" + data.icon;
    let weatherIcon = {
        'height': '100%',
        'fontSize': '1.6rem',
    }

    return (
        <div className="innerContainer" style={container}>
            <div style={sectionLeft}>
                <h1 style={{display:'inline-block', marginRight:'1rem'}}>{data.temp_min}°C</h1>
                <i style={weatherIcon} className={iconString}></i>
            </div>
            <div style={sectionRight}>
            <h3>{data.wind} m/s</h3>
            </div>
        </div>
    )
}

export default CurrentWeather