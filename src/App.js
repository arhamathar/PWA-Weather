import React, { useState } from 'react';

import ExtraInfo from './components/ExtraInfo';
import { getDate } from './utils/getDate';
import { fetchWeather } from './utils/fetchWeather';
import './App.css';

function App() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState({});
    const [dateInfo, setDateInfo] = useState();
    const onSearchHandler = async (e) => {
        if (e.key === "Enter") {
            const data = await fetchWeather(city);
            const dateInfo = getDate();
            setDateInfo(dateInfo);
            setWeather(data.responseData);
            setCity('');
        }
    }

    return (
        <div className="main-container">
            <input
                type="text"
                className="search"
                placeholder="City name "
                value={city}
                onChange={(e) => { setCity(e.target.value) }}
                onKeyPress={onSearchHandler}
                autoFocus
            />
            {weather.main && (
                <div className="weather-info">
                    <div className="city">
                        <h2 className="city-name">
                            <span>{weather.name}</span>
                            <sup>{weather.sys.country}</sup>
                        </h2>
                        <div className="city-temp">
                            {weather.main.temp}
                            <sup>&deg;C</sup>
                        </div>
                        <div className="info">
                            <img
                                className="city-icon"
                                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                alt={weather.weather[0].description}
                            />
                            <p>{weather.weather[0].main}</p>
                        </div>
                    </div>
                    <div className="city extra-info">
                        <div className="date">
                            {dateInfo.day}<br />
                            <div>{dateInfo.dateString}</div>
                        </div>
                        <ExtraInfo title="Humidity :-" value={weather.main.humidity} unit="%" />
                        <ExtraInfo title="Feels Like :-" value={weather.main.feels_like} unit="C" />
                        <ExtraInfo title="Wind :-" value={weather.wind.speed} unit="km/h" />
                        <ExtraInfo title="Pressure :-" value={weather.main.pressure} unit="mbar" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
