import { useEffect, useState } from 'react';
import { citiesAutocomplete } from '../data/citiesAutocomplete';

function OptionsInSearch({ dataSearch }) {


    const [cityFilter, setCityFilter] = useState([]);

    useEffect(() => {
        if (dataSearch !== "")
            setCityFilter(citiesAutocomplete.filter(word => word.LocalizedName.toLowerCase()
                .includes(dataSearch.toLowerCase())));
    }, [dataSearch]);

    return (
        <div className="options">
            {cityFilter ?
                cityFilter.map(city =>
                    <div key={city.Key}>
                        {city.LocalizedName}
                    </div>)
                : "Loading..."}
        </div>
    );
}

export default OptionsInSearch;