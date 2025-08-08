import { useState, useEffect } from "react"
import axios from "axios"

const CityWeatherHooks = (props) => {
    const [cityData, setCityData] = useState({})



    useEffect(() => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=e312dbeb8840e51f92334498a261ca1d`

        const fetchData = async () => {
            const resp = await axios.get(url);
            setCityData(resp.data)
            console.log(resp.data)
        }
        fetchData()
    }, [props.city])

    if (!cityData.name) {
        return (
            <h1>Loading...</h1>
        )
    }

    const iconUrl = `http://openweathermap.org/img/w/${cityData.weather[0].icon}.png`

    return (

        <div className='container'>
            <div className='city-name'>{cityData.name}</div>
            <div className='temp'>{cityData.main.temp} <img src={iconUrl} /> </div>
        </div>
    )
}

export default CityWeatherHooks