const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY);

export const fetchWeather = async (place) => {
    try {
        const response = await fetch(URL, {
            params: {
                q: place,
                units: 'metric',
                APPID: API_KEY,
            }
        });
        const responseData = await response.json()
        return { responseData }

    } catch (err) {
        console.log(err);
    }

};