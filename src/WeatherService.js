const API_KEY = '031997948b992f4c6f9117c35f3c661f'

const formattedWeatherData = async {city, units ='metric'} =>{
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

    const data = await fetch(URL)
      .then((res) => res.json())
      .then((data) => data);

    console.log(data);
};

export {formattedWeatherData};
