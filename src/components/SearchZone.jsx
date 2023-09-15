import '../css/searchzone/zone.css';
import '../css/searchzone/search.css';
import '../css/searchzone/form.css';
import '../css/spinner.css';

import { Fragment, useContext, useEffect, useState } from 'react';
import OptionsInSearch from './OptionsInSearch';


import { apiKey } from '../data/key'
import { CityContext } from '../App';

function SearchZone() {
    const [inputText, setInputText] = useState("");
    const [cityToSearch,setCityToSearch] = useState("");
    const [message, setMessage] = useState("");
    const [timer,setTimer]=useState(null);
    const [loadingOptions,setLoadingOptions] = useState(false);

    const { setCityForWeather } = useContext(CityContext);
    let timerId=null;

    const handleChangeSearch = (e) => {
        const currentText=e.target.value;
        setInputText(currentText);
        setLoadingOptions(true);
        clearTimeout(timer);
        timerId = setTimeout(() => {setCityToSearch(currentText); setLoadingOptions(false)} , 1000);
        setTimer(timerId);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        clearTimeout(timer);
        await fetchCityData();
    }

    const handleChangeKeyUp = (e) =>{
        if(e.keyCode===13) //fue enter el presionado?
            handleSubmit(e);
    }

    const fetchCityData = async () => {
        try {
            const cityRequest = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${inputText}`);
            const cityJson = await cityRequest.json();
            setCityForWeather(cityJson[0]);
        } catch (e) {
            setMessage(e.message);
        }
    }

    useEffect(() => {
        return () => clearTimeout(timer);
    }, [])


    return (
        <section>
            <div className="zone">
                <form className='form-weather' onSubmit={(e) => handleSubmit(e)}>
                    <input className='search-weather' type='text' 
                            placeholder='Search a city to check the current weather'
                            value={inputText} minLength={4} 
                            maxLength={120} 
                            onChange={(event) => handleChangeSearch(event)}
                            onKeyUp={(e) => handleChangeKeyUp(e) } />
                    <input className='search-button' type="submit" value="Search" />
                </form>
                <div>
                    {
                        loadingOptions ? <p className='spinner'></p> : <Fragment />
                    }
                    
                </div>
            </div>
            {message === "" ?
                cityToSearch !== "" ?
                    <OptionsInSearch dataSearch={cityToSearch} setSelected={setInputText} message={setMessage} /> :
                    <Fragment /> :
                message}

        </section>

    );
}

export default SearchZone;