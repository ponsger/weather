import '../css/searchzone/zone.css'
import '../css/searchzone/search.css'
import '../css/searchzone/form.css'

import { Fragment, useContext, useEffect, useState } from 'react';
import OptionsInSearch from './OptionsInSearch';


import { apiKey } from '../data/key'
import { CityContext } from '../App';

function SearchZone() {
    const [inputText, setInputText] = useState("");
    const [message, setMessage] = useState("");

    const { setCityForWeather } = useContext(CityContext);

    const handleChangeSearch = (e) => {
        setInputText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchCityData();

    }

    const fetchCityData = async () => {

        //fetching data to get de Key and send it to the father
        //setCityForWeather()  sending data to father
    }

    useEffect(() => {

    }, [])


    return (
        <section>
            <div className="zone">
                <form className='form-weather' onSubmit={(e) => handleSubmit(e)}>
                    <input className='search-weather' type='text' placeholder='Search city' value={inputText} minLength={4} maxLength={120} onChange={(event) => handleChangeSearch(event)} />
                    <input className='search-button' type="submit" value="Search" />
                </form>
            </div>
            {message === "" ?
                inputText !== "" ?
                    <OptionsInSearch dataSearch={inputText} setSelected={setInputText} message={setMessage} /> :
                    <Fragment /> :
                message}

        </section>

    );
}

export default SearchZone;