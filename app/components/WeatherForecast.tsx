import React from "react";
import { Forecast } from "../models/weather";

interface WeatherForecastProps {
  forecast: Forecast[];
}

const  WeatherForecast: React.FC <WeatherForecastProps>= ({forecast}) => {
return (
  <div className="grid grid-cols-1 sm:grid-cols2 md:grid-cols-3 lg:grid-cols-5 gap 4">
    {forecast.map((day,index)=>(
      <div key={index} className="flex flex-col items-center p-4 border rounded-1g shadow-md">
        <h3 className="text-1g mb-2">
          {new Date(day.date).toLocaleDateString()}
        </h3>
        <img className="mb-2" 
          src={`https://www.openweathermap.org/img/wn/${day.icon}@2x.png`}
        />
        <h4 className="text-x1 mb-1">
          {day.temperature}
        </h4>
        <p className="text-base text-gray-600 capitalize">
          {day.description}
        </p> 
      </div>
    ))}
  </div>  
  );
};

export default WeatherForecast;