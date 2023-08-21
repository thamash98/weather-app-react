import React from 'react'
import './LocationInfo.css'
import {FaArrowDown} from "react-icons/fa"

const LocationInfo = () => {
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