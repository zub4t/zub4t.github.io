import React from 'react';
import TextLayout from './TextLayout';
import config from '../config';
const dictionary = (require("../lang/" + config.lang + ".js")).default;

function Hobbie(props){
    const title = dictionary.hobbies + ':';
    return(
        <div className="Hobbies mdc-layout-grid__cell--span-12">
            <div className="Hobbies-title">
                <TextLayout text={title}/>
            </div>
            <p>
                {
                    props.data.map( (element, index, array) => {
                        return (` ${element}`)
                    }) + "."
                }
            </p>
        </div>
    )
}

export default Hobbie;