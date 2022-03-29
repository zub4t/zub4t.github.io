import React from "react";
import TextLayout from './TextLayout'

function Resume(props){
    return(
        <div className="Resume mdc-layout-grid__cell--span-12">
            <TextLayout 
                text={props.text}
            />
        </div>
    )
}

export default Resume;