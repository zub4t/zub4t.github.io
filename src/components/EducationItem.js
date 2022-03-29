import React from "react";
import SectionDateTitleDescription from "./SectionDateTitleDescription";

function EducationItem(props){
    return(
        <div className="EducationItem mdc-card mdc-card__secundary-action" tabindex="0">
            <SectionDateTitleDescription {...props} />
            <p>
                {
                    props.city
                }
            </p>
        </div>
    )
}

export default EducationItem;