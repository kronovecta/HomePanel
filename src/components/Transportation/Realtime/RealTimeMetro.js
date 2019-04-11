import React from 'react'
import moment from 'moment'
import BlueMetro from '../../../img/BlueMetro@1x.png'
import '../../../../node_modules/font-awesome/css/font-awesome.min.css'; 

const RealTimeMetro =({data}) => {
    let inlineText = { display:'inline-block' }
    
    let container = { 
        background:'#F2F2F2',
        padding:'1rem', 
        borderRadius: '0.3rem',
        margin:'1rem 0', 
        display:'flex', 
        flexDirection:'row', 
        justifyContent: 'space-between',
        alignItems: 'center',

        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 7px 3px'
    }

    let leftSection = {
        display:'flex', 
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between',
        verticalAlign: 'middle',
        marginRight: '2rem'
    }

    let rightSection = {

    }

    return (
        <div className="innerContainer" style={container}>
            <div style={leftSection}>
                <img src={BlueMetro} alt="" style={{marginRight:'1rem', width:'2rem'}}/>
                <h3 style={inlineText}>{data.StopAreaName}</h3>
                <div style={{margin:'0 0.5rem'}} className="fa fa-angle-double-right" />
                <h3 style={inlineText}>{data.Destination}</h3>
            </div>
            <div style={rightSection}>
                <span style={{fontWeight:'600', fontSize:'1.1rem'}}>{moment(data.TimeTabledDateTime).fromNow(true)}</span>
            </div>
        </div>
    )
}

export default RealTimeMetro