import { createContext, useEffect, useState } from "react";
import SearchZone from "./components/SearchZone";

export const CityContext = createContext({});

function App() {

    const [city,setCity] = useState({});

    const setCityForWeather = (citySelected) =>{
        setCity(citySelected);
    }

    useEffect( () =>{
        console.log(city);
    },[city]);

    return (
        <main>
            <CityContext.Provider value={{setCityForWeather}}>
                <SearchZone />
            </CityContext.Provider>
        </main>
    );
}

export default App;