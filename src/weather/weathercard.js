import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Weathercard = ({tempInfo}) => {
    const {temp,pressure,humidity,name,speed,country,sunset,weatherMood}=tempInfo;
    const [weatherState,setWeateherState]=useState("")
    let sec=sunset;
    let date=new Date(sec*1000);
    let timestr=`${date.getHours()}:${date.getMinutes()}`;
    useEffect(()=>{
        if(weatherMood){
            switch(weatherMood){
                case"Clouds":
                       setWeateherState("wi-day-cloudy");
                       break;
                case"Haze":
                         setWeateherState("wi-fog");
                         break;
                case"Mist":
                setWeateherState("wi-dust");
                break;
                case"Clear":
                      setWeateherState("wi-day-sunny");
                      break;
                default:
                    setWeateherState("wi-day-sunny");
                    break;
            }
        }
    })
  return <>
  <article className='widget'>
      <div className='weatherIcon'>
        <i className={`wi ${weatherState}`}></i>
        </div>
        <div className='weatherInfo'>
          <div className='temperature'>
            <span>{temp}&deg;</span>
          </div>
          <div className='description'>
            <div className='weatherCondition'>Sunny</div>
            <div className='place'>{name},{country}</div>
          </div>
          </div>
          <div className='date'>{new Date().toLocaleString()}</div>
          <div className='extra-temp'>
            <div className='temp-info-minmax'>
              <div className='two-sided-section'>
                <p><i className={"wi wi-sunset"}></i></p>
                <p className='extra-info-leftside'>{timestr}<br />{timestr}</p>
              </div>
              <div className='two-sided-section'>
                <p><i className={"wi wi-humidity"}></i></p>
                <p className='extra-info-leftside'>{humidity}</p>
              </div>
            </div>
            <div className='weather-extra-info'>
            <div className='two-sided-section'>
                <p><i className={"wi wi-rain"}></i></p>
                <p className='extra-info-leftside'>{pressure}</p>
              </div>
              <div className='two-sided-section'>
                <p><i className={"wi wi-strong-wind"}></i></p>
                <p className='extra-info-leftside'>{speed}</p>
              </div>
            </div>
         
        </div>
     
    </article>
  </>
}

export default Weathercard