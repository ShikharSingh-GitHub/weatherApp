// src/components/Search.jsx
import React, { useState } from 'react';


function Search({ fetchWeather }) {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city !== '') {
      fetchWeather(city);
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Search;
