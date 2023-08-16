import '../css/searchzone/optionsInSearch/options.css'
import '../css/searchzone/optionsInSearch/option.css'
import '../css/searchzone/optionsInSearch/cloud.css'


import { useEffect, useState } from 'react';
import { citiesAutocomplete } from '../data/citiesAutocomplete';

function OptionsInSearch({ dataSearch, setSelected }) {
    const [cityFilter, setCityFilter] = useState([]);

    const handleSelectCity = (selectedCity) => {
        setCityFilter([]);
        setSelected(selectedCity.LocalizedName);
    }

    useEffect(() => {
        if (dataSearch !== "")
            setCityFilter(citiesAutocomplete.filter(word => word.LocalizedName.toLowerCase()
                .includes(dataSearch.toLowerCase())));
    }, [dataSearch]);

    return (
        <div className="options">
            {cityFilter ?
                cityFilter.map(city =>
                    <div key={city.Key} className='option' onClick={() => handleSelectCity(city)}>
                        {`${city.LocalizedName}, ${city.Country.LocalizedName}`}
                    </div>)
                : "Loading..."}
        </div>
    );
}

export default OptionsInSearch;