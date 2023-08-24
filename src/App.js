import { useEffect, useState } from "react";
import summer from './assets/summer.jpg';
import winter from './assets/winter.jpg';
import LocationInfo from "./components/LocationInfo";
import { formattedWeatherData } from "./WeatherService";

function App() {

  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await formattedWeatherData("paris", units);
      setWeather(data);
    };
    fetchWeatherData();
  },[]);

  return (
    <div className="app" style={{backgroundImage:`url(${summer})`}}> 
      <div className="overlay">
        {
          weather && (
            <div className="container">
          <div className="section section__inputs">
            <input type="text" name="city" placeholder="Enter City..." />
            <button>°F</button>
          </div>
          <div className="section section__temperature">
            <div className="icon">
             <h3>{`${weather.name}, ${weather.country}`}</h3>
             <img src={weather.iconURL} alt="weatherIcon" />
             <h3>{weather.description}</h3>
            </div>
            <div className="temperature"></div>
            <h1>{`${weather.temp.toFixed()} °${units === "metric"? "C" : "F"}`}</h1>
          </div>   
          {/* bottom description */}
          <LocationInfo weather={weather} units = {units}/>
        </div>  
          )
        }
        
      </div>
    </div>
  );
}

export default App;
