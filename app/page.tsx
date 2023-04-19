//Pages/index.tsx
import React from 'react';
import CurrentWeather from './components/CurrentWeather';
import { CurrentWeather as CurrentWeatherType } from './models/weather';

const Home: React.FC = () => {
  //placeholder data for testing
  const sampleCurrentWeather: CurrentWeatherType = {
    city: 'London',
    country: 'UK',
    temperature: 10,
    description: 'clear sky',
    icon: '01d',
  };


  return (
    <div>
      <CurrentWeather currentWeather={sampleCurrentWeather}/>
    </div>
  );  
};

export default Home;
