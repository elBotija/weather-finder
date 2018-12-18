import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Weather extends Component {
    showData = () => {
        const { name, sys, main, weather } = this.props.dataresponse
        const kelvin = 273.15
        if( !name || !sys || !main || !weather ) return null

        return(
            <div className="weather">
                <span className="item">
                    <b>Location:</b> {name},{sys.country}
                </span>
                <span className="item">
                    <b>Temperature:</b> {(main.temp - kelvin).toFixed(2)} &deg;C
                </span>
                <span className="item">
                    <b>Humidity:</b> {main.humidity}%
                </span>
                <span className="item">
                    <b>Conditions:</b> {weather[0].description}
                </span>
            </div>
        )
    }
    render(){
        return(
            <div>
                {this.showData()}
            </div>
        )
    }
}

Weather.propTypes = {
    dataresponse: PropTypes.object.isRequired
}

export default Weather
