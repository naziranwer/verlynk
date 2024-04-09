import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import WeatherCard from './WeatherCard';
import { removeCity } from '../redux/reducers/weatherSlice';

const CityList = () => {
  const cities = useSelector((state) => state.weather?.cities);
  const dispatch = useDispatch();

  const handleRemoveCity = (city) => {
    dispatch(removeCity(city));
  };

  return (
    <div className="flex justify-center gap-3 flex-wrap ">
      {cities?.map((city) => (
        <div key={city} className="mb-4">
          <WeatherCard city={city} />
          <button
            onClick={() => handleRemoveCity(city)}
            className="mt-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default CityList;
