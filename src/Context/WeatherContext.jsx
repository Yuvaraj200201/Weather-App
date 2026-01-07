import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState(null);
  const [latLon, setlatLon] = useState({
    lat: "",
    lon: "",
  });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setlatLon({
        lat: latitude,
        lon: longitude,
      });
    });
  }, []);

  const apikey = import.meta.env.VITE_WEATHER_KEY;
  const baseUrl = import.meta.env.VITE_WEATHER_URL;

  const fetchWeather = async ({ lat, lon, city }) => {
    try {
      let url = ""
      if (city) {
        url = `${baseUrl}?q=${city}&appid=${apikey}&units=metric`;
      } else {
        url = `${baseUrl}?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`;
      }
      const response = await axios.get(url);
      setData(response.data);
      console.log("data fetched", response.data);
    } catch (err) {
      console.log(err);
      alert("City or Country not found");
    }
  };
  useEffect(() => {
    if (latLon.lat && latLon.lon) {
      fetchWeather(latLon);
    }
  }, [latLon]);

  return (
    <WeatherContext.Provider
      value={{
        fetchWeather,
        searchQuery,
        setSearchQuery,
        data,
        setData,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
