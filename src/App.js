import './css/city-title.css'

import { Fragment, createContext, useEffect, useState } from "react";
import SearchZone from "./components/SearchZone";
import CurrentWeather from "./components/CurrentWeather";
import ForecastHourly from './components/ForecastHourly';
import ForecastDaily from './components/ForecastDaily';


import { apiKey } from './data/key'

export const CityContext = createContext({});

function App() {

    const [city, setCity] = useState({});
    const [currentConditionsWeather, setCurrentConditionsWeather] = useState([]);
    const [errorMessageDaily, setErrorMessageDaily] = useState("");
    const [errorMessageHourly, setErrorMessageHourly] = useState("");
    const setCityForWeather = (citySelected) => {
        setCity(citySelected);
    }

    const fetchingWeatherOfCity = async () => {
        if (!city.Key)
            return;
        try {
            const currentConditionsRequest = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${city.Key}?apikey=${apiKey}&alias=Always`);
            const currentConditionsJson = await currentConditionsRequest.json();
            setCurrentConditionsWeather(currentConditionsJson);
        } catch (e) {
            console.log(e);
        }

    }

    useEffect(() => {
        fetchingWeatherOfCity();
    }, [city]);

    return (
        <main>
            <CityContext.Provider value={{ setCityForWeather }}>
                <SearchZone />
            </CityContext.Provider>

            {city.Key ?
                <div>
                    <p className="city-title">{`${city.LocalizedName}, ${city.Country.LocalizedName}`}</p>
                    {currentConditionsWeather.length !== 0 ?
                        <CurrentWeather data={currentConditionsWeather} /> :
                        <Fragment />}
                    {errorMessageDaily === "" ?
                        <ForecastDaily city={city.Key} dataKey={apiKey} error={setErrorMessageDaily} /> :
                        <Fragment>{errorMessageDaily}</Fragment>
                    }
                    {errorMessageHourly === "" ?
                        <ForecastHourly city={city.Key} dataKey={apiKey} error={setErrorMessageHourly} /> :
                        <Fragment>{errorMessageHourly}</Fragment>}
                </div> :
                <Fragment />}

        </main>
    );
}

export default App;