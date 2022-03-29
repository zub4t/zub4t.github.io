import React from 'react'

function ProjectItem(props) {
  return (
    <div
      className="ProjectItem mdc-card mdc-card__secundary-action"
      tabindex="0"
    >
      <div className="">
        <h2>{props.title}</h2>
        <img src={props.URL}></img>
      </div>
    </div>
  )
}

export default ProjectItem
