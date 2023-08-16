import '../css/searchzone/zone.css'
import '../css/searchzone/search.css'
import '../css/searchzone/form.css'

import { Fragment, useEffect, useState } from 'react';
import OptionsInSearch from './OptionsInSearch';
import { apiKey } from '../data/key'

function SearchZone() {
    const [inputText, setInputText] = useState("");

    const handleChangeSearch = (e) => {
        setInputText(e.target.value);
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
            <OptionsInSearch dataSearch={inputText} setSelected={setInputText} />
        </section>

    );
}

export default SearchZone;