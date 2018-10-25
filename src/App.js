import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

import {Grid, Col, Row} from 'react-flexbox-grid';
import './App.css';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';

const cities = [
  'Buenos Aires,AR',
  'San Miguel de Tucumán,AR',
  'Cordoba,AR',
  'Santa Fe,AR',
];


class App extends Component {
  constructor(){
    super();
    this.state = {
      city: null,
    }
  }

  handleSelectedLocation = city => {
    //console.log("hadleSelectionLocation en App.js: " + city);  
    this.setState({
      city
    });
  }

  render() {
    const {city} = this.state;
    return (
      <div className="App">
      <Grid>
        <Row>
          <AppBar position='static'>
            <Toolbar>
              <Typography variant='h6' color='inherit'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList 
              //props que se setean
              cities={cities} 
              onSelectedLocation={this.handleSelectedLocation}
            />
          </Col>
          <Col xs={12} md={6}>
            < div className = "detail" >
              
                {
                  city?
                    <ForecastExtended city={city}/>
                    : <h2>Seleccione una ciudad para visualizar el tiempo.</h2>
                }                
              
            </div>
          </Col>
        </Row>
      </Grid>
      </div>
    );
  }
}

export default App;
