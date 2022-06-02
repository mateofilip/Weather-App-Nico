import { useState, useEffect } from 'react';
import axios from 'axios';
import Body from './components/Body/Body.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Error from './components/Error/Error.jsx';
import './App.scss';
import 'animate.css';

const apiKey = '95ec01f8b61f542bd3d75bc4a0bf4394';

export default function App() {
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLongitude(position.coords.longitude);
        setLatitude(position.coords.latitude);
      });

      getWeather(latitude, longitude);
    } else {
      alert('Geolocation is not supported by this browser');
    }
  }, [latitude, longitude]);

  async function getWeather(latitude, longitude) {
    let initialData = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
    );

    let weatherData = initialData.data;

    const weather = {
      city: weatherData.name,
      temp: Math.round(weatherData.main.temp),
      maxTemp: Math.round(weatherData.main.temp_max),
      minTemp: Math.round(weatherData.main.temp_min),
      feelsLike: Math.round(weatherData.main.feels_like),
      weather: weatherData.weather[0].main,
      img: weatherData.weather[0].icon,
      humidity: weatherData.main.humidity,
      windSpeed: weatherData.wind.speed,
    };

    setWeather(weather);
    console.log(weatherData);
  }

  return (
    <div className="App">
      <Navbar />
      {weather.temp ? <Body weather={weather} /> : <Error />}
    </div>
  );
}
