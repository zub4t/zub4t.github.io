import React from 'react';
import TopicSection from '../containers/TopicSection';
import ElementAndLevel from './ElementAndLevel';

function SkillLayout(props){
    return(
        <div className="SkillLayout">
            <TopicSection title={props.title}>
                {
                    props.data.map(element =>{
                        return(
                            <ElementAndLevel {...element} />
                        )
                    })
                }
            </TopicSection>
        </div>
    )
}

export default SkillLayout;