import { useState } from 'react';
import './App.css';
import CityWeatherHooks from './CityWeatherHooks';

const WeatherAppHooks = () => {

    const [city, setCity] = useState('London');
    const [cityNameForWheather, setCityNameForWeather] = useState('London');

    const handleChange = (event) => {
        setCity(event.target.value)
    }

    const citySearch = (event) => {
        event.preventDefault()
        setCityNameForWeather(city)
    }

    return (
        <div className='container'>
            <CityWeatherHooks city={cityNameForWheather} />
            <div className='row justify-content-center'>
                <form onSubmit={citySearch}>
                    <input
                        type="text"
                        name="city"
                        id='city'
                        value={city}
                        onChange={handleChange}
                    />
                    <input type="submit" value="Search" className='btn btn-primary' />
                </form>
            </div>
        </div>
    )
}

export default WeatherAppHooks;
