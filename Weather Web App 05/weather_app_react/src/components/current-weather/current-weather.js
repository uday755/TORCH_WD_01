import "./current-weather.css"

const CurrentWeather = ({ data }) => {
    return (
        <div>
            <div className="weather">
                <div className="top">
                    <div>
                        <p className="city">{data.city}</p>
                        <p className="weatherDescription">{data.weather[0].description}</p>
                    </div>
                    <img src={`icons/${data.weather[0].icon}.png`} className="weatherIcon" alt="Weather" />
                </div>
                <div className="bottom">
                    <p className="temperature">
                        {Math.round(data.main.temp)}°C
                    </p>
                    <div className="details">
                        <div className="parameterRow">
                            <span className="parameterLabel top">Details : </span>
                        </div>
                        <div className="parameterRow">
                            <span className="parameterLabel">Feels Like</span>
                            <span className="parameterValue">{Math.round(data.main.feels_like)}°C</span>
                        </div>
                        <div className="parameterRow">
                            <span className="parameterLabel">Wind</span>
                            <span className="parameterValue">{Math.round(data.wind.speed)} m/s</span>
                        </div>
                        <div className="parameterRow">
                            <span className="parameterLabel">Humidity</span>
                            <span className="parameterValue">{Math.round(data.main.humidity)}%</span>
                        </div>
                        <div className="parameterRow">
                            <span className="parameterLabel">Pressure</span>
                            <span className="parameterValue">{Math.round(data.main.pressure/100)} hPa</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CurrentWeather