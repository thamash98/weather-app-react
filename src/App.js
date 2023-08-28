import { useEffect, useState } from "react";
import summer from './assets/summer.jpg';
import winter from './assets/winter.jpg';
import LocationInfo from "./components/LocationInfo";
import { formattedWeatherData } from "./WeatherService";

function App() {

  const [city, setCity] = useState("Matara");
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await formattedWeatherData(city, units);
      setWeather(data);
    };
    fetchWeatherData();
  },[units,city]);
  
  const handleUnitsClick = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);

    const isCelsius = currentUnit === "C";
    button.innerText = isCelsius ? "°F" : "°C";
    setUnits(isCelsius ? "metric" : "imperial");
  };

  const enterKeyPressed = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      //e.currentTarget.blur();
    }
  };

  return (
    <div className="app" style={{backgroundImage:`url(${summer})`}}> 
      <div className="overlay">
        {
          weather && (
            <div className="container">
          <div className="section section__inputs">
            <input onKeyDown={enterKeyPressed} type="text" name="city" placeholder="Enter City..." />
            <button onClick={(e) => handleUnitsClick(e)}>°F</button>
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
