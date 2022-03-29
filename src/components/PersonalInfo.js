import React from 'react'
import TopicSection from '../containers/TopicSection'
import SectionTitleShortDescription from './SectionTitleShortDescription'
import config from '../config'
const dictionary = require('../lang/' + config.lang + '.js').default

function PersonalInfo(props) {
  const titulo = dictionary.personal_info
  const mobileTitle = dictionary.mobile
  const emailTitle = dictionary.email
  const idcardTitle = dictionary.id
  const githubTitle = dictionary.git
  const linkedinTitle = dictionary.linkedin
  const idcardDescription = `${props.data.id.number} ${dictionary.from} ${props.data.id.city}`
  return (
    <div className="PersonalInfo">
      <TopicSection title={titulo}>
        <SectionTitleShortDescription
          title={mobileTitle}
          description={props.data.mobile}
        />
        <SectionTitleShortDescription
          title={emailTitle}
          description={props.data.email}
        />
        {
          <a href={props.data.git} target="_blank">
            <SectionTitleShortDescription
              title={githubTitle}
              description={props.data.git}
            />
          </a>
        }

        <a href={props.data.linkedin} target="_blank">
          <SectionTitleShortDescription
            title={linkedinTitle}
            description={props.data.linkedin}
          />
        </a>
      </TopicSection>
    </div>
  )
}

export default PersonalInfo
