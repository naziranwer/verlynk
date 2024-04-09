import React, { useState, useEffect } from 'react';
import { getWeatherData } from '../utils/api';

const WeatherCard = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getWeatherData(city);
        setWeatherData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [city]);

  return (
    <div className="bg-blue-200 rounded-md p-4 shadow-md w-64 sm:w-80 h-48 sm:h-56 flex flex-col justify-between">
      <h2 className="text-lg font-semibold mb-2">{city}</h2>
      {loading ? (
        <p>Loading...</p>
      ) : weatherData ? (
        <div>
          <p className="text-base">Temperature: {parseInt(weatherData.main.temp - 273)}°C</p>
          <p className="text-base">Weather: {weatherData.weather[0].description}</p>
          <p className="text-base">Humidity: {weatherData.main.humidity}%</p>
          <p className="text-base">Wind Speed: {weatherData.wind.speed} m/s</p>
          
        </div>
      ) : (
        <p className="text-red-600">Failed to fetch weather data</p>
      )}
    </div>
  );
};

export default WeatherCard;

