import React, { Component } from 'react'
import PropTypes from 'prop-types'

class FormWeather extends Component {
    cityRef = React.createRef()
    countryRef = React.createRef()

    searchWeather = (e) => {
        e.preventDefault()
        const response = {
            city: this.cityRef.current.value,
            country: this.countryRef.current.value
        }
        this.props.dataResponse(response)
    }

    render(){
        return(
            <form className='form-weather' onSubmit={this.searchWeather}>
                <input id='city' ref={this.cityRef} type='text' placeholder='Insert city...' />
                <input id='country' ref={this.countryRef} type='text' placeholder='Insert country...' />
                <input type='submit' id='submit' value='serch weather' />
            </form>
        )
    }
}

FormWeather.propTypes = {
    dataResponse: PropTypes.func.isRequired
}

export default FormWeather
