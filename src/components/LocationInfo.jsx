import React from 'react';
import './LocationInfo.css';
import {FaArrowDown} from "react-icons/fa";
import { BiHappy } from "react-icons/bi";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";


const LocationInfo = () => {

  const tempUnit = units === "metric" ? "°C" : "°F";
  const windUnit = units === "metric" ? "m/s" : "m/h";

  const cards = [
    {
      id: 1,
      icon: <FaArrowDown />,
      title: "min",
      data: weather.temp_min.toFixed(),
      unit: tempUnit,
    },
    {
      id: 2,
      icon: <FaArrowUp />,
      title: "max",
      data: weather.temp_max.toFixed(),
      unit: tempUnit,
    },
    {
      id: 3,
      icon: <BiHappy />,
      title: "feels like",
      data: weather.feels_like.toFixed(),
      unit: tempUnit,
    },
    {
      id: 4,
      icon: <MdCompress />,
      title: "pressure",
      data: weather.pressure,
      unit: "hPa",
    },
    {
      id: 5,
      icon: <MdOutlineWaterDrop />,
      title: "humidity",
      data: weather.humidity,
      unit: "%",
    },
    {
      id: 6,
      icon: <FaWind />,
      title: "wind speed",
      data: weather.speed.toFixed(),
      unit: windUnit,
    },
  ];

  return (
    <div className="section section__location-info">
        <div className="card">
            <div className="location-info__card-icon">
              <FaArrowDown/>
              <small>min</small>
            </div>
            <h2>32 °C</h2>
        </div>
        <div className="card">
            <div className="location-info__card-icon">
              <FaArrowDown/>
              <small>min</small>
            </div>
            <h2>32 °C</h2>
        </div>
        <div className="card">
            <div className="location-info__card-icon">
              <FaArrowDown/>
              <small>min</small>
            </div>
            <h2>32 °C</h2>
        </div>
        <div className="card">
            <div className="location-info__card-icon">
              <FaArrowDown/>
              <small>min</small>
            </div>
            <h2>32 °C</h2>
        </div>
        <div className="card">
            <div className="location-info__card-icon">
              <FaArrowDown/>
              <small>min</small>
            </div>
            <h2>32 °C</h2>
        </div>
    </div>
  )
};

export default LocationInfo;