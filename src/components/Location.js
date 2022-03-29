import React from 'react';
import config from '../config';
const dictionary = (require("../lang/" + config.lang + ".js")).default;

function Location(props){
    return(
        <div className="Location">
            <p>{dictionary ? dictionary.location : ''}:</p>
            <p>{props.location}</p>
        </div>
    )
}

export default Location;