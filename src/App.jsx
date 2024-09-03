import React, { useState } from 'react';

import Search from './components/Search';
import Weather from './components/Weather';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async (city) => {
    const apiKey = d755bc4402ced83f8bba582df6c28dba; // Replace with your actual API key
    const url = `/api/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      console.log('Full API Response:', response);
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      console.log('Weather Data:', data);
      setWeatherData(data);
      setError('');
    } catch (error) {
      console.error('Error:', error.message);
      setWeatherData(null);
      setError('Error fetching data. Please try again later.');
    }
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      <Search fetchWeather={fetchWeather} />
      {error && <p className="error">{error}</p>}
      {weatherData && <Weather data={weatherData} />}
    </div>
  );
}

export default App;
