// src/components/Weather.jsx
import React from 'react';


function Weather({ data }) {
  const { name, main, weather } = data;

  return (
    <div className="weather">
      <h2>{name}</h2>
      <p>{weather[0].description}</p>
      <p>Temperature: {main.temp}°C</p>
      <p>Humidity: {main.humidity}%</p>
    </div>
  );
}

export default Weather;
