import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';
import './styles.css';
//Obtiene un array devuelve lista de componentes



const LocationList = ({ cities, onSelectedLocation }) => {
    const handleWeatherLocationClick = city => {
        console.log("hanleWeatherLocationClick(city) en LocationList.js");
        onSelectedLocation(city);
    }

    const strToComponenets = cities => (
        cities.map(city => 
            (
                <WeatherLocation 
                    //props seteadas
                    key={city} 
                    city={city} 
                    onWeatherLocationClick={()=>handleWeatherLocationClick(city)}
                />
            )
        )
    );
    
    return(
        <div className="locationList">
            {strToComponenets(cities)}
        </div>
)};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}

export default LocationList;
