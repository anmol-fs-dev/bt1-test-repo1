import React, { useState, useEffect } from 'react';
import { Search } from './components/Search';
import WeatherCard from './components/WeatherCard';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('London');

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://wttr.in/${city}?format=j1`);
        if (!response.ok) {
          throw new Error('City not found or server error');
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  const handleSearch = (newCity) => {
    setCity(newCity);
  };

  return (
    <div className="app-container">
      <div className="content">
        <header style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <h1 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '4px', opacity: 0.6 }}>
            SkyCast Weather
          </h1>
        </header>

        <Search onCityChange={handleSearch} />

        {loading && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
            <span className="loader"></span>
          </div>
        )}

        {error && (
          <div className="error-msg animate-fade-in">
            {error}. Please try another city.
          </div>
        )}

        {!loading && !error && weatherData && (
          <WeatherCard data={weatherData} />
        )}
      </div>
    </div>
  );
}

export default App;
