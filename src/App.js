import React from 'react';
import Form from './components/Form';
import CityList from './components/CityList';

function App() {
  return (
    <div className="bg-gradient-to-b from-blue-200 to-blue-500 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-semibold mb-8 text-white">Weather App</h1>
      <div className="bg-white p-8 rounded-lg shadow-lg  w-auto">
        <Form />
        <CityList />
      </div>
    </div>
  );
}

export default App;
