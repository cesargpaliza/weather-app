import React from 'react';
import PropTypes from 'prop-types';

const Location = (props) => {
    //Sin desesctucturing
    //const city = props.city;
    //Con desesctucturing
    const {city} = props;
    return(
        <div className="locationCont">
            <h1>{city}</h1>
        </div>
    );
};

Location.propTypes = {
    city: PropTypes.string.isRequired,
}

export default Location;