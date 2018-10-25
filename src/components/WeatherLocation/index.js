import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {PropTypes} from 'prop-types';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity'
import Location from './Location.js';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';

import './styles.css';


class WeatherLocation extends Component {

    constructor(props){
        super(props);
        const {city} = props;        
        //Estado actual que hace que el componente se renderize
        //Mantiene la informacion visual del componente
        this.state = {
            city,
            data: null,
        }
    }

    componentDidMount = () => {
        /*Se llama el evento para realizar el fetch
        Se lo realiza en este metodo por que 
        */
        this.fetchApiWeather();     
    }
       

    fetchApiWeather = () => {
        const api_weather = getUrlWeatherByCity(this.state.city);
        fetch(api_weather).then( resolve => {
            //nos devuelve una promesa con el resultado
            return resolve.json();
        }).then( (data) =>{
            const newWeather = transformWeather(data);
            this.setState({
                city: this.state.city,
                data: newWeather
            });
        }); 
    }

    render(){
        
        const {onWeatherLocationClick} = this.props;
        const {city, data} = this.state;
        return(
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
                <Location city={city}
                />
                {data? <WeatherData data={data}/> : 
                <CircularProgress/>
            }               
            </div>
        );
    }
}
WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    //Esperamos que nos manden el objeto
    onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;