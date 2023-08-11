import '../css/searchzone/zone.css'
import '../css/searchzone/search.css'
import '../css/searchzone/form.css'

import { Fragment, useEffect, useState } from 'react';
import { apiKey } from '../data/key'

function SearchZone() {

    const [inputText, setInputText] = useState("");
    const [citiesFound, setCitiesFound] = useState([]);

    const fetchCities = async () => {
        const responseCitiesSearch = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${inputText}&offset=5`);
        const citiesFound = await responseCitiesSearch.json();
        return citiesFound;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setInputText(e.target.value);
        const citiesFetched = await fetchCities();
        if (citiesFetched)
            setCitiesFound(...citiesFetched)
    }

    const handleChangeCity = async (e) => {

    }


    useEffect(() => {
        // getInformation();
    }, [])


    return (
        <div className="zone">
            <form className='form-weather' onSubmit={(e) => handleSubmit(e)}>
                <input className='search-weather' type='text' minLength={4} maxLength={120} />
                <input className='search-button' type="submit" value="Search" />
            </form>
        </div>
    );
}

export default SearchZone;