const API_KEY = process.env.REACT_APP_API_KEY;
const units = 'metric';

export const fetchWeather = async (place) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=${units}&appid=${API_KEY}`;
    try {
        const response = await fetch(URL);
        const responseData = await response.json()
        return { responseData }

    } catch (err) {
        console.log(err);
        const message = err.message;
        return { message }
    }

};