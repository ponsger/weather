import { Fragment } from "react";

import { dataIcons } from '../data/dataIcons'

function CurrentWeather({ data }) {
    return (
        <Fragment>
            <div>
                {console.log(data[0], dataIcons)}
            </div>
            <section>
                <div className="weather">
                    <div className="weather-header">
                        <div className="weather-main">
                            <img height={"100px"} src={`/icons/${dataIcons[data[0].WeatherIcon].Icon}`} alt={dataIcons[data[0].WeatherIcon].Text} />
                            <div>{data[0].WeatherText}</div>
                        </div>
                        <div className="weather-temperature">
                            <p>{data[0].Temperature.Metric.Value}</p>
                            <p>{`º${data[0].Temperature.Metric.Unit}`}</p>
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