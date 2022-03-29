import React from 'react';
import LevelProgressGenerator from './LevelProgressGenerator';

function ElementAndLevel(props){
    return(
        <div className="ElementAndLevel">
            <p>{props.name}</p>
            <div className="ElementAndLevel_LevelProgress_Container">
                <LevelProgressGenerator level={props.level}/>
            </div>
        </div>
    )
}

export default ElementAndLevel;