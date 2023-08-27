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

import { nextFiveDaysForecast } from '../data/citiesData'

import { dataIcons } from '../data/dataIcons';

function ForecastDaily({ dataKey }) {
    return (
        <section className='forecast-daily'>
            <header className='daily-headline'>
                <p className='headline-text'>{nextFiveDaysForecast.Headline.Text}</p>
            </header>
            <main className='daily-main'>
                {nextFiveDaysForecast.DailyForecasts.map(day =>
                    <div className='main-container' key={day.EpochDate}>
                        <div className='container-date'>
                            <p className=''>{new Date(day.Date).toLocaleDateString()}</p>
                        </div>
                        <div className='container-range-temperature'>
                            <p className='temperature-minimum'>{`${day.Temperature.Minimum.Value}`}</p>
                            <p className='temperature-slash'>/</p>
                            <p className='temperature-maximum'>{`${day.Temperature.Maximum.Value}`}</p>
                        </div>
                        <div className='container-day'>
                            <h1 className='day-title'>Day</h1>
                            <img className='day-img' src={`/icons/${dataIcons[day.Day.Icon].Icon}`} />
                            <p className='day-phrase'>{day.Day.IconPhrase}</p>
                            <p className='day-precipitation'>{`${day.Day.HasPrecipitation ? "" : "Not"} Expected Precipitation`}</p>
                        </div>
                        <div className='container-night'>
                            <h1 className='night-title'>Night</h1>
                            <img className='night-img' src={`/icons/${dataIcons[day.Night.Icon].Icon}`} />
                            <p className='night-phrase'>{day.Night.IconPhrase}</p>
                            <p className='night-precipitation'>{`${day.Night.HasPrecipitation ? "" : "Not"} Expected Precipitation`}</p>
                        </div>
                    </div>
                )}
            </main>

        </section>);
}

export default ForecastDaily;