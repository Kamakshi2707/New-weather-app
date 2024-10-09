import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
import './WeatherApp.css';

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Indore",
        feelsLike: 26.1,
        humidity: 73,
        temp: 26.1,
        tempMax: 26.1,
        tempMin: 26.1,
        weather: "haze"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div className="weather-app">
            <h1>Weather App</h1>
            <div className="search-box">
                <SearchBox updateInfo={updateInfo} />
            </div>
            <div className="info-box">
                <InfoBox info={weatherInfo} />
            </div>
        </div>
    );
}
