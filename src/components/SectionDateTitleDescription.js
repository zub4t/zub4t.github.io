import React from "react";
import TextLayout from './TextLayout';

function SectionDateTitleDescription(props){
    return(
        <div className="SectionDateTitleDescription">
            <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-2">
                    <div className="SectionDateTitleDescription_Date">
                        <TextLayout text={props.date}/>
                    </div>
                </div>
                <div className="mdc-layout-grid__cell--span-10">
                    <div className="SectionDateTitleDescription_Title">
                        <TextLayout text={props.title}/>
                    </div>
                    <div className="SectionDateTitleDescription_Entity">
                        <TextLayout text={props.entity}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionDateTitleDescription;