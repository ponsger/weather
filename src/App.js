import './css/city-title.css'

import { Fragment, createContext, useEffect, useState } from "react";
import SearchZone from "./components/SearchZone";
import CurrentWeather from "./components/CurrentWeather";

import { weatherOfCity } from './data/citiesData'

export const CityContext = createContext({});

function App() {

    const [city, setCity] = useState({});

    const setCityForWeather = (citySelected) => {
        setCity(citySelected);
    }

    const fetchingWeatherOfCity = () => {
        if (city.Key)
            2 + 2; //fetching data using the key
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
                    <CurrentWeather data={weatherOfCity} />
                </div>

                : <Fragment />}

        </main>
    );
}

export default App;