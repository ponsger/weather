import '../css/forecastHourly/hourlyForecast.css'
import '../css/forecastHourly/hourly.css'
import '../css/forecastHourly/hourly-hour.css'
import '../css/forecastHourly/hourly-icon.css'
import '../css/forecastHourly/hourly-weather.css'
import '../css/forecastHourly/weather-temperature.css'
import '../css/forecastHourly/weather-unit.css'
import '../css/forecastHourly/hourly-state.css'
import '../css/forecastHourly/hourly-precipitation.css'

import { twelveHoursForecast } from '../data/citiesData'
import { dataIcons } from '../data/dataIcons';

function ForecastHourly({ dataKey }) {

    return (
        <section className='hourlyForecast'>
            {twelveHoursForecast.map(hourlyData =>
                <div className='hourly' key={hourlyData.EpochDateTime}>
                    <h1 className='hourly-hour'>{`${new Date(hourlyData.DateTime).getHours()}`}</h1>
                    <img className='hourly-icon' src={`/icons/${dataIcons[hourlyData.WeatherIcon].Icon}`} />
                    <div className='hourly-weather'>
                        <p className='hourly-weather__temperature'>{hourlyData.Temperature.Value}</p>
                        <p className='hourly-weather__unit'>{` º${hourlyData.Temperature.Unit}`}</p>
                    </div>
                    <p className='hourly-state'>{hourlyData.IconPhrase}</p>
                    <p className='hourly-precipitation'>{`PoP: ${hourlyData.PrecipitationProbability} %`}</p>
                </div>)}
        </section>
    );
}

export default ForecastHourly;