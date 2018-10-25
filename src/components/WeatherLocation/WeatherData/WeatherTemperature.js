import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE,
} from '../../../constants/weathers';
import './styles.css';
const icons = {
    [CLOUD]: "cloud",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [THUNDER]: "thunderstorm",
    [DRIZZLE]: "showers",
}

const  getWeatherIcon = weatherState => {
    //En base a lo que venga en el parametro weatherState, obtiene el valor de la coleccion icons
    const icon = icons[weatherState];
    const sizeIcon = "4x";
    if(icon)
        return <WeatherIcons className="wicon" name={icon} size={sizeIcon}/>;
    else
        return <WeatherIcons className="wicon" name={"day-sunny"} size={sizeIcon}/>;
}


const WeatherTemperature = ({ temperature, weatherState}) => (
    <div className="weatherTemperatureCont">
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature">{`${Math.trunc(temperature)} `}</span>
        <span className="temperatureType">{` °C`}</span>
    </div>
);

//Libreria Proptypes para validar del lado de la vista los datos que vienen del backend
WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
}


export default WeatherTemperature;