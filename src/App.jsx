import React, { useState } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import './App.css';
import Search from './components/Search';
import Weather from './components/Weather';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async (city) => {
    const apiKey = 'd755bc4402ced83f8bba582df6c28dba'; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      setWeatherData(data);
      setError('');
    } catch (error) {
      setWeatherData(null);
      setError('Error fetching data. Please try again later.');
    }
  };

  return (
    <Router>
      <div className="app">
        <h1>Weather App</h1>
        <Search fetchWeather={fetchWeather} />
        {error && <p className="error">{error}</p>}
        {weatherData && <Weather data={weatherData} />}
      </div>
    </Router>
  );
}

export default App;
