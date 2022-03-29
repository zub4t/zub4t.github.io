import React from 'react';
import SkillLayout from './SkillLayout';
import config from '../config';
const dictionary = (require("../lang/" + config.lang + ".js")).default;

function SoftSkills(props){
    const titulo = dictionary.soft_skills;
    return (
        <div className="SoftSkills">
            <SkillLayout {...props} title={titulo}/>
        </div>
    )
}

export default SoftSkills;