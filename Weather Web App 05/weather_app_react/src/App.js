import './App.css';
import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather';
import { OpenWeather_API_Key, OpenWeather_API_URL } from './API';
import { useState } from 'react';


function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [currentForecast, setCurrentForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split("");

    const fetchCurrentWeather = fetch(`${OpenWeather_API_URL}weather?lat=${lat}&lon=${lon}&appid=${OpenWeather_API_Key}&units=metric`)
    const fetchCurrentForecast = fetch(`${OpenWeather_API_URL}forecast?lat=${lat}&lon=${lon}&appid=${OpenWeather_API_Key}&units=metric`)

    Promise.all([fetchCurrentWeather, fetchCurrentForecast])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        // The spread operator (...weatherResponse) is used to merge the properties of weatherResponse into the new object.
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setCurrentForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  }

  console.log(currentWeather);
  console.log(currentForecast);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
    </div>
  );
}

export default App;
