import React, { useState } from 'react';

import { fetchWeather } from './utils/fetchWeather';
import './App.css';

function App() {
    const [city, setCity] = useState('');


    return (
        <div className="main-container">
            <input
                type="text"
                className="search"
                placeholder="City name "
                value={city}
                onChange={(e) => { setCity(e.target.value) }}
            />
        </div>
    );
}

export default App;
