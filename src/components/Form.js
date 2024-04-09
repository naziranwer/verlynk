import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCity } from '../redux/reducers/weatherSlice';

import citiesWithCountry from '../utils/city';

const Form = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const dispatch = useDispatch();

  const cities = citiesWithCountry;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCity !== '') {
      dispatch(addCity(selectedCity));
      setSelectedCity('');
    }
  };

  return (
    <div className="flex justify-center mb-4">
      <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-lg shadow-md">
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="w-full  py-2 px-4 mb-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 "
        >
          <option value="">Select a city</option>
          {cities.map((city, index) => (
            <option key={index} value={`${city.name}, ${city.country}`}>
              {city.name}, {city.country}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none"
        >
          Add City
        </button>
      </form>
    </div>
  );
};

export default Form;


