import React, { Component } from 'react';
import './css/main.css';
import Sidebar from './components/Sidebar.js'
import FormWeather from './components/FormWeather.js'
import Error from './components/Error.js'
import Weather from './components/Weather.js'

class App extends Component {

    state = {
        error: '',
        query: {},
        result: {}
    }

    componentDidMount(){
        this.setState({
            error: false
        })
    }
    componentDidUpdate(prevProps, prevState){
        if( prevState.query !== this.state.query ) {
            this.apiQuery()
        }
    }

    apiQuery = () => {
        const { city, country } = this.state.query
        if( !city || !country ) return null

        const appId = '657fcea32def94dc2e8bf0610b743698'
        const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?'
        let getUrl = `${apiUrl}q=${city},${country}&APPID=${appId}`

        fetch(getUrl)
            .then(response => {
                return response.json()
            })
            .then(data => {
                this.setState({
                    result: data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    dataResponse = response => {
        console.log(response)
        if ( response.city === '' || response.country ==='') {
            this.setState({
                error: true
            })
        }else{
            this.setState({
                error: false,
                query: response
            })
        }
    }

    render() {
        const error = this.state.error
        let printResponse

        if(error){
            printResponse = <Error message='Please, complete city and country'/>
        }else{
            printResponse = <Weather dataresponse={this.state.result} />
        }

        return (
            <div className="App">
                <div className="sidebar flex">
                    <Sidebar
                        title='Weather Finder'
                        description='Find out the temperatura, Weather conditions and more...'
                    />
                </div>
                <div className="content-weather flex">
                    <div className="content">
                        <FormWeather
                            dataResponse={this.dataResponse}
                            />
                        {printResponse}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
