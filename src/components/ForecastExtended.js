import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import ForecastItem from './ForecastItem';
import getUrlForecastByCity from './../services/getUrlForecastByCity'
import transformForecast from './../services/transformForecast'

import './styles.css';

/*
const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo',
]
const data = {
    temperature: 12,
    weatherState: "string",
    humidity: 12,
    wind: "string",
};
*/



class ForecastExtended extends Component {
    
    constructor(){
        super();
        this.state = {
            forecastData: null,
        };
    }

    renderProgress(){
        return(< CircularProgress / >);
    }

    renderForecastItemDays(forecastData) {
        console.log(forecastData);
        return( forecastData.map(forecast => (
                <ForecastItem 
                    key={`${forecast.weekDay}${forecast.hour}`} 
                    weekDay = {forecast.weekDay} 
                    hour = {forecast.hour}
                    data = {forecast.data}
                />
            ))
        );
    }

    updateCity = city =>{
        const urlForecast = getUrlForecastByCity(city);

        fetch(urlForecast).then(data => (
            data.json()
        )).then(weatherData => {
            console.log(weatherData)

            const forecastData = transformForecast(weatherData);
            //console.log("Resultado:")
            //console.log(forecastData);
            this.setState({
                forecastData
            });
            console.log("FORECAST DATA:")
            console.log(this.state.forecastData);

        });
    }
    
    componentDidMount(){
        this.updateCity(this.props.city);
    }

    //https://hackernoon.com/replacing-componentwillreceiveprops-with-getderivedstatefromprops-c3956f7ce607
    componentWillReceiveProps(nextProps){
        if (nextProps.city !== this.props.city){
            this.setState({forecastData: null});
            this.updateCity(nextProps.city);
        }
    }

    render() {
        const {city} = this.props;
        const {forecastData} = this.state;
        
        return (
            <div>
                <h2 >
                    Pronostico Extendido {city}
                </h2>
                {console.log("render(): " + forecastData)}
                {
                    forecastData?
                    this.renderForecastItemDays(forecastData) :
                    this.renderProgress()
                    
                }
                
            </div>
        );
  }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
};

export default ForecastExtended;