import '../css/forecastDaily/forecast-daily.css'
import '../css/forecastDaily/headline.css'
import '../css/forecastDaily/headline-text.css'
import '../css/forecastDaily/main.css'
import '../css/forecastDaily/main-container.css'
import '../css/forecastDaily/container-date.css'
import '../css/forecastDaily/container-date.css'
import '../css/forecastDaily/container-range-temperature.css'
import '../css/forecastDaily/temperature-minimum.css'
import '../css/forecastDaily/temperature-slash.css'
import '../css/forecastDaily/temperature-maximum.css'
import '../css/forecastDaily/container-day.css'
import '../css/forecastDaily/day-title.css'
import '../css/forecastDaily/day-img.css'
import '../css/forecastDaily/day-phrase.css'
import '../css/forecastDaily/day-precipitation.css'
import '../css/forecastDaily/night-title.css'
import '../css/forecastDaily/night-img.css'
import '../css/forecastDaily/night-phrase.css'
import '../css/forecastDaily/night-precipitation.css'
import '../css/forecastDaily/container-night.css'

import { dataIcons } from '../data/dataIcons';
import { Fragment, useEffect, useState } from 'react'

function ForecastDaily({ city, dataKey }) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const [daysForecast, setDayForecast] = useState({});

    const fetchingDataFromNextDays = async () => {
        const nextDaysRequest = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${city}?apikey=${dataKey}&metric=true`);
        const nextDaysData = await nextDaysRequest.json();
        setDayForecast(nextDaysData);
    }

    useEffect(() => {
        fetchingDataFromNextDays();

    }, [])

    return (
        <section className='forecast-daily'>
            {daysForecast.Headline ?
                <header className='daily-headline'>
                    <p className='headline-text'>{daysForecast.Headline.Text}</p>
                </header> :
                <Fragment>Loading...</Fragment>}

            <main className='daily-main'>
                {daysForecast.DailyForecasts ?
                    daysForecast.DailyForecasts.map(day =>
                        <div className='main-container' key={day.EpochDate}>
                            <div className='container-date'>
                                <p className=''>{new Date().getDay() === new Date(day.Date).getDay() ? "Today" : days[new Date(day.Date).getDay()]}</p>
                            </div>
                            <div className='container-range-temperature'>
                                <p className='temperature-minimum'>{`${day.Temperature.Minimum.Value}`}</p>
                                <p className='temperature-slash'>/</p>
                                <p className='temperature-maximum'>{`${day.Temperature.Maximum.Value}`}</p>
                            </div>
                            <div className='container-day'>
                                <h1 className='day-title'>Day</h1>
                                <img className='day-img' src={require(`../assets/icons/${dataIcons[day.Day.Icon].Icon}`)} />
                                <p className='day-phrase'>{day.Day.IconPhrase}</p>
                                <p className='day-precipitation'>{`${day.Day.HasPrecipitation ? "" : "Not"} Expected Precipitation`}</p>
                            </div>
                            <div className='container-night'>
                                <h1 className='night-title'>Night</h1>
                                <img className='night-img' src={require(`../assets/icons/${dataIcons[day.Night.Icon].Icon}`)} />
                                <p className='night-phrase'>{day.Night.IconPhrase}</p>
                                <p className='night-precipitation'>{`${day.Night.HasPrecipitation ? "" : "Not"} Expected Precipitation`}</p>
                            </div>
                        </div>
                    ) : <Fragment>Loading...</Fragment>}
            </main>

        </section>);
}

export default ForecastDaily;