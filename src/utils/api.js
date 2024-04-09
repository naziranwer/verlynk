import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

export const getWeatherData = async (city) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
