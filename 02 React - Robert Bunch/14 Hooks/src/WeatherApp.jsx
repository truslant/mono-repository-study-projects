import React, { Component } from 'react';
import './App.css';
import CityWeather from './CityWeather';

class WeatherApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            city: 'London',
            cityNameForWheather: "London"
        }
    }

    handleChange = (event) => {
        this.setState({ city: event.target.value })
    }

    citySearch = (event) => {
        event.preventDefault()
        this.setState({ cityNameForWheather: this.state.city })

    }

    render() {
        return (
            <div className='container'>
                <CityWeather city={this.state.cityNameForWheather} />
                <div className='row justify-content-center'>
                    <form onSubmit={this.citySearch}>
                        <input
                            type="text"
                            name="city"
                            id='city'
                            value={this.state.city}
                            onChange={this.handleChange}
                        />
                        <input type="submit" value="Search" className='btn btn-primary' />
                    </form>
                </div>
            </div>
        )
    }
}

export default WeatherApp;
