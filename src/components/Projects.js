import React from 'react'
import TopicSection from '../containers/TopicSection'
import NUCC from '../art/NUCC'

import ProjectItem from './ProjectItem'

//import ProjectItem from './ProjectsItem'
import config from '../config'
const dictionary = require('../lang/' + config.lang + '.js').default
const resize = (w) => {/*
  const portal = document.getElementById('portal')

  const Body = document.querySelector('.Body').getBoundingClientRect()
  let topView = (Body.height - Body.y) / 2 - w / 2

  let leftView = Body.x + w / 2

  let top = portal.getBoundingClientRect().bottom
  let left = portal.getBoundingClientRect().left

  const id = setInterval(() => {
    portal.style.top = top + 'px'
    portal.style.left = left + 'px'
    top -= 10
    left += 10
    console.log(left + ' ' + leftView)
    if (!(left < leftView && top > topView)) {
      clearInterval(id)
      portal.style.zIndex = 3
      portal.style.backgroundColor = '#ccc'
      portal.style.removeProperty('left')
      portal.style.width = Body.width + 'px'
      portal.style.height = '70vh'
      document.querySelector('#portal canvas').style.display = 'none'
      document.querySelector('#galery').style.display = 'flex'
    }
  }, 10)*/
}
function ProfessionalExperience(props) {
  const titulo = dictionary.professional_experience

  return (
    <div className="Projects mdc-layout-grid__cell--span-12">
      <TopicSection title={titulo}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
          }}
          onClick={() =>
            resize(parseInt(document.querySelector('#portal').clientWidth))
          }
          id="portal"
        >
          <div
            style={{
              display: 'none',
              width: '100%',
              justifyContent: 'space-around',
            }}
            id="galery"
          >
            {props.data.map((content) => {
              return <ProjectItem title={content.title} URL={content.URL} />
            })}
          </div>
        </div>
      </TopicSection>
    </div>
  )
}

export default ProfessionalExperience
