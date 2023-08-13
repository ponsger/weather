import '../css/searchzone/zone.css'
import '../css/searchzone/search.css'
import '../css/searchzone/form.css'

import { Fragment, useEffect, useState } from 'react';
import OptionsInSearch from './OptionsInSearch';
import { apiKey } from '../data/key'

function SearchZone() {
    const [inputText, setInputText] = useState("");
    const [citiesFound, setCitiesFound] = useState([]);

    const handleChangeSearch = (e) => {
        setInputText(e.target.value);
    }




    // const fetchCities = async () => {
    //     const responseCitiesSearch = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${inputText}&offset=5`);
    //     const citiesFound = await responseCitiesSearch.json();
    //     return citiesFound;
    // }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setInputText(e.target.value);
    //     const citiesFetched = await fetchCities();
    //     if (citiesFetched)
    //         setCitiesFound(...citiesFetched)
    // }

    // const handleChangeCity = async (e) => {

    // }


    useEffect(() => {
        // getInformation();
    }, [])


    return (
        <section>
            <div className="zone">
                <form className='form-weather' onSubmit={(e) => handleSubmit(e)}>
                    <input className='search-weather' type='text' placeholder='Search city' minLength={4} maxLength={120} onChange={(event) => handleChangeSearch(event)} />
                    <input className='search-button' type="submit" value="Search" />
                </form>
            </div>
            <OptionsInSearch dataSearch={inputText} />
        </section>

    );
}

export default SearchZone;