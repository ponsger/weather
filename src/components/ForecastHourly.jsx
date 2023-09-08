import '../css/forecastHourly/hourlyForecast.css'
import '../css/forecastHourly/hourly.css'
import '../css/forecastHourly/hourly-hour.css'
import '../css/forecastHourly/hourly-icon.css'
import '../css/forecastHourly/hourly-weather.css'
import '../css/forecastHourly/weather-temperature.css'
import '../css/forecastHourly/weather-unit.css'
import '../css/forecastHourly/hourly-state.css'
import '../css/forecastHourly/hourly-precipitation.css'

import { dataIcons } from '../data/dataIcons';
import { Fragment, useEffect, useState } from 'react'

function ForecastHourly({ city, dataKey, error }) {

    const [next12Hours, setNext12Hours] = useState([]);

    const fetchingNextHours = async () => {
        try {
            const nextHoursRequest = await fetch(`http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${city}?apikey=${dataKey}&metric=true`);
            const nextHoursData = await nextHoursRequest.json();
            setNext12Hours(nextHoursData);
        } catch (e) {
            error(e.message);
        }

    }

    useEffect(() => {
        fetchingNextHours();
    }, [])

    return (
        <section className='hourlyForecast'>
            {next12Hours.length !== 0 ?
                next12Hours.map(hourlyData =>
                    <div className='hourly' key={hourlyData.EpochDateTime}>
                        <h1 className='hourly-hour'>{`${new Date(hourlyData.DateTime).getHours()}`}</h1>
                        <img className='hourly-icon' src={require(`../assets/icons/${dataIcons[hourlyData.WeatherIcon].Icon}`)} />
                        <div className='hourly-weather'>
                            <p className='hourly-weather__temperature'>{hourlyData.Temperature.Value}</p>
                            <p className='hourly-weather__unit'>{` º${hourlyData.Temperature.Unit}`}</p>
                        </div>
                        <p className='hourly-state'>{hourlyData.IconPhrase}</p>
                        <p className='hourly-precipitation'>{`PoP: ${hourlyData.PrecipitationProbability} %`}</p>
                    </div>)
                :
                <Fragment>Loading...</Fragment>}
        </section>
    );
}

export default ForecastHourly;