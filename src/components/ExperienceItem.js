import React from "react";
import SectionDateTitleDescription from "./SectionDateTitleDescription";
import SectionUnorderedList from "./SectionUnorderedList";

function ExperienceItem(props){
    return (
        <div className="ExperienceItem mdc-card mdc-card__secundary-action" tabindex="0">
            <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-12">
                    <SectionDateTitleDescription {...props} />
                </div>
                <div className="mdc-layout-grid__cell--span-12">
                    <SectionUnorderedList contents={props.activities}/>
                </div>
            </div>
        </div>
    )
}

export default ExperienceItem;