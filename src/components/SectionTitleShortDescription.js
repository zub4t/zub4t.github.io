import React from 'react';

function SectionTitleShortDescription(props){
    return(
        <div className="SectionTitleShortDescription">
            <p>{props.title}</p>
            <p>{props.description}</p>
        </div>
    )
}

export default SectionTitleShortDescription;