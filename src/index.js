import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { data } from './data'
import Header from './containers/Header'
import Body from './containers/Body'
import SelectionSection from './containers/SelectionSection'

import Principal from './containers/Principal'
import Resume from './components/Resume'
import ProfessionalExperience from './components/ProfessionalExperience'
import Education from './components/Education'
import Projects from './components/Projects'

import Hobbie from './components/Hobbie'
import Complementary from './containers/Complementary'
import PersonalInfo from './components/PersonalInfo'
import HardSkills from './components/HardSkills'
import SoftSkills from './components/SoftSkills'
import Languages from './components/Languages'

import matrix from './art/matrix'

class Main extends Component {
  render() {
    return (
      <div>
        <div className="mdc-layout-grid__inner">
          <SelectionSection />
          <div
            className="principal_layout mdc-layout-grid__cell--span-12"
            style={{
              width: '60vw',
              marginLeft: '20%',
              marginTop: '1200px',
              position: 'absolute',
              zIndex: '2',
              display: 'block',
            }}
          >
            <Header
              name={data.header.name}
              profession={data.header.profession}
              location={data.header.location}
            />
            <Body>
              <Principal>
                <Resume text={data.body.principal.resume} />
                <ProfessionalExperience
                  data={data.body.principal.professionalExperience}
                />
                <Education data={data.body.principal.education} />
                <Projects data={data.body.principal.Projects} />
                <Hobbie data={data.body.principal.hobbies} />
              </Principal>
              <Complementary>
                <PersonalInfo data={data.body.complementary.personalInfo} />
                <HardSkills data={data.body.complementary.hardSkills} />
                <SoftSkills data={data.body.complementary.softSkills} />
                <Languages data={data.body.complementary.languages} />
              </Complementary>
            </Body>
          </div>
          <div className="Footer mdc-layout-grid__cell--span-12"></div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('main'))
