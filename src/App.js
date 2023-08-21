import React, { useEffect } from "react";
import summer from './assets/summer.jpg';
import winter from './assets/winter.jpg';
import LocationInfo from "./components/LocationInfo";
import { formattedWeatherData } from "./WeatherService";

function App() {

  useEffect(() => {
    const data = await formattedWeatherData{'paris'}
  },[])




  return (
    <div className="app" style={{backgroundImage:`url(${summer})`}}> 
      <div className="overlay">
        <div className="container">
          <div className="section section__inputs">
            <input type="text" name="city" placeholder="Enter City..." />
            <button>°F</button>
          </div>
          <div className="section section__temperature">
            <div className="icon">
             <h3>London,GB</h3>
             <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="weatherIcon" />
             <h3>Cloudy</h3>
            </div>
            <div className="temperature"></div>
            <h1>34 °C</h1>
          </div>   
          {/* bottom description */}
          <LocationInfo/>
        </div>  
      </div>
    </div>
  );
}

export default App;
