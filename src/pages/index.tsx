// HOME PAGE 

import React, { useEffect } from 'react'
// style
import s from "@/styles/Home.module.scss"
// modules 
import { weather } from '@/modules/weather'
//components
import WeatherCityCard from '@/components/weatherCityCard'
// ts interfaces
interface TempWeather {
  data: any;
}

const Index = ({ data }: TempWeather) => {
 
  return (
    <>
    <WeatherCityCard data={data}/>
    </>
  )
}

export async function getServerSideProps() {
  try {
    // init
    const getData = new weather();
    const localWeather = await getData.getWeather('london');
    console.log(localWeather)
    
    return { props: { data: localWeather } };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return { props: { data: null } }; // Handle error gracefully
  }
}

export default Index;
