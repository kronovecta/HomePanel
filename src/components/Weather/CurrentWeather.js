import React from 'react'

const CurrentWeather = ({ data }) => {
    let container = {
        width:'100%',
    }

    let sectionLeft = {}
    let sectionRight = {}

    return (
        <div style={container}>
            <div style={sectionLeft}>
                <h3>{data.temp}</h3>
            </div>
            <div style={sectionRight}>
            
            </div>
        </div>
    )
}

export default CurrentWeather