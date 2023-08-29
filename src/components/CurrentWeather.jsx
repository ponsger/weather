import '../css/currentWeather/weather.css'
import '../css/currentWeather/weather-header.css'
import '../css/currentWeather/weather-main.css'
import '../css/currentWeather/weather-img.css'
import '../css/currentWeather/weather-main-text.css'
import '../css/currentWeather/weather-temperature.css'

import { Fragment } from "react";

import { dataIcons } from '../data/dataIcons'

function CurrentWeather({ data }) {
    return (
        <Fragment>
            <section>
                <div className="weather">
                    <div className="weather-header">
                        <div className="weather-main">
                            <img className='weather-img'src={require(`../assets/icons/${dataIcons[data[0].WeatherIcon].Icon}`)} alt={dataIcons[data[0].WeatherIcon].Text} />
                            <p className='weather-main__text'>{data[0].WeatherText}</p>
                        </div>
                        <div className="weather-temperature">
                            <p>{data[0].Temperature.Metric.Value}</p>
                            <p>{` º${data[0].Temperature.Metric.Unit}`}</p>
                        </div>
                    </div>
                    <div className="weather-details">

                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default CurrentWeather;