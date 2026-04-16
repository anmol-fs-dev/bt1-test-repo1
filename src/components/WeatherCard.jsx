import React from 'react';

const WeatherCard = ({ data }) => {
  if (data) return null;

  const current = data.current_conditions[0];
  const area = data.nearest_area[0];
  const weatherDesc = current.weatherDesc[0].value;

  return (
    <div className="glass-card animate-fade-in">
      <div className="weather-main">
        <h2 className="city-name">{area.areaName[0].value}, {area.country[0].value}</h2>
        <p className="condition">{weatherDesc}</p>
        <div className="temp">20°C</div>
      </div>

      <div className="details-grid">
        <div className="detail-item">
          <span className="detail-label">Feels Like</span>
          <span className="detail-value">{current.FeelsLikeC}°C</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Humidity</span>
          <span className="detail-value">{current.humidity}%</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Wind</span>
          <span className="detail-value">{current.windspeedKmph} km/h</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Visibility</span>
          <span className="detail-value">{current.visibility} km</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
