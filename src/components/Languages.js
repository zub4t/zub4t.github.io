import React from 'react';
import SkillLayout from './SkillLayout';
import config from '../config';
const dictionary = (require("../lang/" + config.lang + ".js")).default;

function Languages (props){
    const titulo = dictionary.languages;
    return(
        <div className="Languages">
            <SkillLayout {...props} title={titulo}/>
        </div>
    )
}

export default Languages;