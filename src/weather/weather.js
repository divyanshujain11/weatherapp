import React,{useState,useEffect} from 'react'
import "./style.css";
import Weathercard from './weathercard';
const Weather = () => {
  const [searchValue,setSearchValue]=useState("kota");
  const [tempInfo,setTempInfo]=useState({});
  const getWeatherInfo=async()=>{
    try{
      let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=1b141c6cbad0f47d9d9bd5597451179b`;
      const res= await fetch(url);
      const data= await res.json();
      // console.log(data);
      const {temp,pressure,humidity}=data.main;
      // console.log(temp);
      const {main:weatherMood}=data.weather[0];
      const {name}=data;
      const {speed}=data.wind;
      const {country,sunset}=data.sys;
      const myNewWeatherInfo={temp,pressure,humidity,name,speed,country,sunset,weatherMood};
      setTempInfo(myNewWeatherInfo);
    }
    catch(error){
      console.log(error);
    }
  };
useEffect(()=>{
  getWeatherInfo();
},[]);
   

  return <>
  <div className='wrap'>
    <div className='search'>
      <input type="search" placeholder='search...' autoFocus id='search' className='searchTerm' 
      value={searchValue} onChange={(e)=> setSearchValue(e.target.value)}/>
      <button className='searchButton' type='button' onClick={getWeatherInfo}>Search</button>
    </div>
    </div>
    
    <Weathercard tempInfo={tempInfo}/>
 
  </>
}

export default Weather