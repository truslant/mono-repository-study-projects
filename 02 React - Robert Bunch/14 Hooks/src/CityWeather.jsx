import React, { Component } from 'react';
import axios from 'axios';

class CityWeather extends Component {
    constructor() {
        super()
        this.state = {
            cityData: {}
        }
    }

    async componentDidMount() {
        this.getWeather()
    }

    async componentDidUpdate(oldProps) {
        if (oldProps.city !== this.props.city) {
            this.getWeather()
        }
    }

    async getWeather() {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.props.city}&units=imperial&appid=e312dbeb8840e51f92334498a261ca1d`

        const resp = await axios.get(url);
        this.setState({ cityData: resp.data })
        console.log(resp.data)
    }

    render() {

        if (!this.state.cityData.name) {
            return (
                <h1>Loading...</h1>
            )
        }

        const iconUrl = `http://openweathermap.org/img/w/${this.state.cityData.weather[0].icon}.png`
        
        return (

            <div className='container'>
                <div className='city-name'>{this.state.cityData.name}</div>
                <div className='temp'>{this.state.cityData.main.temp} <img src={iconUrl} /> </div>
            </div>

        )
    }
}

export default CityWeather;
