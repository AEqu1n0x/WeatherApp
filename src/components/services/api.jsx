import axios from "axios";

const API_KEY = "08e34c9989d03918800392e2a4a3d4c4";
const GEO_API_URL = "https://api.openweathermap.org/geo/1.0/direct";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

export const getWeather = async (city, country) => {
  try {
    const geoResponse = await axios.get(GEO_API_URL, { params: {  q: `${city},${country}`, appid: API_KEY } });

    const { lat, lon } = geoResponse.data[0];

    let weatherResponse = await axios.get(API_URL, {
      params: { lat, lon, appid: API_KEY, units: "metric" },
    });

    return weatherResponse.data;
  } catch (error) {
    console.log("Error while useing api", error.message);
    return error.response;
  }
};
