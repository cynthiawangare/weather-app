import React from "react";
import { CurrentWeather } from "../models/weather";

interface CurrentWeatherProps {
  currentWeather: CurrentWeather;
}

const CurrentWeather:React.FC<CurrentWeatherProps> = ({currentWeather}) => {
  const { city,country, temperature, description, icon } =currentWeather;

  return (
    <div className="flex flex-col items-center p-8 mt-32">
      <h2 className="text-4xl mb-4">
        {city}, {country}
      </h2>
      <img className="mb-2" 
          src={`https://www.openweathermap.org/img/wn/${icon}@2x.png`}
       />
      <h3 className="text-xl mb-1">{temperature}°C</h3>
      <p className="text-lg text-gray-600 capitalize">{description}</p>
    </div>
    );
  };

export default CurrentWeather;