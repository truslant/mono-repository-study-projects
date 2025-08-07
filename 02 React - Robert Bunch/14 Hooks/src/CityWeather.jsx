import React, { Component } from 'react';
import axios from 'axios';

class CityWeather extends Component {
    constructor() {
        super()
        this.state = { city: 'London' }
    }

    handleChange(event) {
        this.setState({ city: event.taget.value })
    }
    render() {
        return (
            <div>
                <h1> CityWeather </h1>
                <input
                    type="text"
                    name="city"
                    id='city'
                    value={this.state.city}
                    onChange={this.handleChange}
                />
            </div>

        )
    }
}

export default CityWeather;
