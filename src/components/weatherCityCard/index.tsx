import React from "react";
// style
import s from "./weatherCityCard.module.scss";
interface WeatherProps {
  data: {
    main: {
      temp: number;
      humidity: number;
    };
    weather: {
      description: string;
      main: string;
    }[];
    wind: {
      speed: number;
      deg: number;
    };
  };
}

const WeatherComponent = ({ data }: WeatherProps) => {
  // destructure main
  const { temp, humidity } = data.main;
  // destructure weather
  const { description, main} = data.weather[0];
  // destructure wind
  const { speed,  } = data.wind;
  return (
    <div>
      <h2>Weather Information</h2>
      <p>Temperature: {temp - 273}°C</p>
      <p>Humidity:{speed}</p>
      <p>Weather: {}</p>
      {/* Add more data fields as needed */}
    </div>
  );
};

export default WeatherComponent;
