import React from 'react';
import SkillLayout from './SkillLayout';
import config from '../config';
const dictionary = (require("../lang/" + config.lang + ".js")).default;

function HardSkills(props){
    const titulo = dictionary.skills;
    return(
        <div className="HardSkills">
            <SkillLayout {...props} title={titulo}/>
        </div>
    )
}

export default HardSkills;
