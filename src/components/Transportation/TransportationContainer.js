import React, { Component } from 'react'
import RealTimeMetroContainer from './Realtime/RealTimeMetroContainer'
import response from '../../response.json'

export default class TransportationContainer extends Component {
    constructor(props) {
        super(props)
        
        this.state = { 
            realtime: {
                metros: []
            }
        }
    }
    
    fetchTransportation() {
        // let API_KEY = process.env.REACT_APP_TRAFIKLAB_KEY;
        // let url = `https://bypasscors.herokuapp.com/api/?url=` + encodeURIComponent(`http://api.sl.se/api2/realtimedeparturesV4.json?key=${API_KEY}&siteid=9302&timewindow=10`);
        // console.log(url)

        // fetch(url)
        //     .then(response => response.json()) 
        //     .then(json => this.setState({ realtime: { metros:json.ResponseData.Metros }}))

        let object = {
            "StatusCode": 0,
            "Message": null,
            "ExecutionTime": 51,
            "ResponseData": {
                "LatestUpdate": "2019-04-11T14:40:08",
                "DataAge": 17,
                "Metros": [
                    {
                        "GroupOfLine": "tunnelbanans blå linje",
                        "DisplayTime": "5 min",
                        "TransportMode": "METRO",
                        "LineNumber": "11",
                        "Destination": "Akalla",
                        "JourneyDirection": 1,
                        "StopAreaName": "Kista",
                        "StopAreaNumber": 3251,
                        "StopPointNumber": 3251,
                        "StopPointDesignation": "1",
                        "TimeTabledDateTime": "2019-04-11T14:46:00",
                        "ExpectedDateTime": "2019-04-11T14:46:00",
                        "JourneyNumber": 30437,
                        "Deviations": null
                    },
                    {
                        "GroupOfLine": "tunnelbanans blå linje",
                        "DisplayTime": "6 min",
                        "TransportMode": "METRO",
                        "LineNumber": "11",
                        "Destination": "Kungsträdgården",
                        "JourneyDirection": 2,
                        "StopAreaName": "Kista",
                        "StopAreaNumber": 3251,
                        "StopPointNumber": 3252,
                        "StopPointDesignation": "2",
                        "TimeTabledDateTime": "2019-04-11T14:46:45",
                        "ExpectedDateTime": "2019-04-11T14:46:45",
                        "JourneyNumber": 30068,
                        "Deviations": null
                    }
                ],
                "Buses": [
                    {
                        "GroupOfLine": "blåbuss",
                        "TransportMode": "BUS",
                        "LineNumber": "179",
                        "Destination": "Vällingby",
                        "JourneyDirection": 2,
                        "StopAreaName": "Kista centrum",
                        "StopAreaNumber": 50579,
                        "StopPointNumber": 50581,
                        "StopPointDesignation": "G",
                        "TimeTabledDateTime": "2019-04-11T14:38:00",
                        "ExpectedDateTime": "2019-04-11T14:39:37",
                        "DisplayTime": "Nu",
                        "JourneyNumber": 21245,
                        "Deviations": null
                    },
                    {
                        "GroupOfLine": "blåbuss",
                        "TransportMode": "BUS",
                        "LineNumber": "178",
                        "Destination": "Mörby station",
                        "JourneyDirection": 2,
                        "StopAreaName": "Kista centrum",
                        "StopAreaNumber": 50579,
                        "StopPointNumber": 50581,
                        "StopPointDesignation": "G",
                        "TimeTabledDateTime": "2019-04-11T14:38:00",
                        "ExpectedDateTime": "2019-04-11T14:40:54",
                        "DisplayTime": "Nu",
                        "JourneyNumber": 30874,
                        "Deviations": null
                    },
                    {
                        "GroupOfLine": "blåbuss",
                        "TransportMode": "BUS",
                        "LineNumber": "179",
                        "Destination": "Vällingby",
                        "JourneyDirection": 2,
                        "StopAreaName": "Kista centrum",
                        "StopAreaNumber": 50579,
                        "StopPointNumber": 50581,
                        "StopPointDesignation": "G",
                        "TimeTabledDateTime": "2019-04-11T14:45:00",
                        "ExpectedDateTime": "2019-04-11T14:44:04",
                        "DisplayTime": "3 min",
                        "JourneyNumber": 21261,
                        "Deviations": null
                    },
                    {
                        "GroupOfLine": null,
                        "TransportMode": "BUS",
                        "LineNumber": "627",
                        "Destination": "Åkerby industriområde",
                        "JourneyDirection": 2,
                        "StopAreaName": "Kista centrum",
                        "StopAreaNumber": 50579,
                        "StopPointNumber": 55067,
                        "StopPointDesignation": "C",
                        "TimeTabledDateTime": "2019-04-11T14:45:00",
                        "ExpectedDateTime": "2019-04-11T14:45:00",
                        "DisplayTime": "4 min",
                        "JourneyNumber": 30986,
                        "Deviations": null
                    },
                    {
                        "GroupOfLine": null,
                        "TransportMode": "BUS",
                        "LineNumber": "517",
                        "Destination": "Spånga station",
                        "JourneyDirection": 2,
                        "StopAreaName": "Kista centrum",
                        "StopAreaNumber": 50579,
                        "StopPointNumber": 50580,
                        "StopPointDesignation": "E",
                        "TimeTabledDateTime": "2019-04-11T14:47:00",
                        "ExpectedDateTime": "2019-04-11T14:47:00",
                        "DisplayTime": "6 min",
                        "JourneyNumber": 41899,
                        "Deviations": null
                    },
                    {
                        "GroupOfLine": "blåbuss",
                        "TransportMode": "BUS",
                        "LineNumber": "179",
                        "Destination": "Sollentuna station",
                        "JourneyDirection": 1,
                        "StopAreaName": "Kista centrum",
                        "StopAreaNumber": 50579,
                        "StopPointNumber": 50580,
                        "StopPointDesignation": "E",
                        "TimeTabledDateTime": "2019-04-11T14:44:00",
                        "ExpectedDateTime": "2019-04-11T14:47:28",
                        "DisplayTime": "7 min",
                        "JourneyNumber": 21216,
                        "Deviations": null
                    }
                ],
                "Trains": [],
                "Trams": [],
                "Ships": [],
                "StopPointDeviations": []
            }
        }

        this.setState({realtime: { metros: object.ResponseData.Metros }})
    }

    componentDidMount() {
        this.fetchTransportation();
    }

    render() {
        return (
            <React.Fragment>
                <RealTimeMetroContainer realtime={this.state.realtime.metros} />
            </React.Fragment>
        )
    }
}
