import '../css/searchzone/optionsInSearch/options.css'
import '../css/searchzone/optionsInSearch/option.css'
import '../css/searchzone/optionsInSearch/cloud.css'


import { useContext, useEffect, useState } from 'react';
import { apiKey } from '../data/key'
import { CityContext } from '../App';

function OptionsInSearch({ dataSearch, setSelected, message }) {
    const { setCityForWeather } = useContext(CityContext);
    const [cityFilter, setCityFilter] = useState([]);

    const handleSelectCity = (selectedCity) => {
        setCityFilter([]);
        setSelected(selectedCity.LocalizedName);
        setCityForWeather(selectedCity);
    }

    const getOptions = async () => {
        try {
            const dataOptionsRequest = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${dataSearch}`);
            const dataOptionsJson = await dataOptionsRequest.json();
            setCityFilter(dataOptionsJson);
        } catch (e) {
            if (e instanceof TypeError) {
                if (e.message.includes('fetch')) {
                    message("Error getting information about cities.")
                }
            }
        }

    }

    useEffect(() => {
        if (dataSearch !== "")
            getOptions();
    }, [dataSearch]);

    return (
        <div className="options">
            {cityFilter ?
                cityFilter.map(city =>
                    <div key={city.Key} className='option' onClick={() => handleSelectCity(city)}>
                        {`${city.LocalizedName}, ${city.Country.LocalizedName}`}
                    </div>) :
                "Loading..."}
        </div>
    );
}

export default OptionsInSearch;