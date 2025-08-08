import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import WeatherApp from './WeatherApp'
import WeatherAppHooks from './WeatherAppHooks.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WeatherAppHooks />
  </StrictMode>,
)

// <CityWeather />