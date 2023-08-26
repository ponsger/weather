import { nextFiveDaysForecast } from '../data/citiesData'

import { dataIcons } from '../data/dataIcons';

function ForecastDaily({ dataKey }) {
    return (
        <section>
            <header>
                <h1>{nextFiveDaysForecast.Headline.Category}</h1>
                <p>{nextFiveDaysForecast.Headline.Text}</p>
            </header>
            <main>
                {nextFiveDaysForecast.DailyForecasts.map(day =>
                    <div>
                        <p>{day.Date}</p>
                        <div className='range-temperature'>
                            <p>{`${day.Temperature.Minimum.Value}`}</p> 
                            <p>/</p>
                            <p>{`${day.Temperature.Maximum.Value}`}</p>
                        </div>
                        <div className='day-temperature'>
                            <img src={`/icons/${dataIcons[day.Day.Icon].Icon}`} />
                            <p>{day.Day.IconPhrase}</p>
                            <p>{`${day.Day.HasPrecipitation ? "" : "Not"} Expected Precipitation`}</p>
                        </div>
                        <div className='night-temperature'>
                            <img src={`/icons/${dataIcons[day.Night.Icon].Icon}`} />
                            <p>{day.Night.IconPhrase}</p>
                            <p>{`${day.Night.HasPrecipitation ? "" : "Not"} Expected Precipitation`}</p>
                        </div>
                    </div>
                )}
            </main>

        </section>);
}

export default ForecastDaily;