import React, { useState } from 'react';

import { fetchWeather } from './utils/fetchWeather';
import './App.css';

function App() {
    const [city, setCity] = useState('');

    const onSearchHandler = async (e) => {
        if (e.key === "Enter") {
            const data = await fetchWeather(city);
            console.log(data);
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
            />
        </div>
    );
}

export default App;
