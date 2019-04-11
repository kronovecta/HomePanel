import React, { Component } from 'react'
import RealTimeMetro from './RealTimeMetro'

export default class RealTimeMetroContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let MetroList = this.props.realtime.map(metro => {
            return <RealTimeMetro data={metro} key={metro.JourneyNumber}  />
        })
    
        return (
            <React.Fragment>
                {MetroList}
            </React.Fragment>
        )
    }
}
