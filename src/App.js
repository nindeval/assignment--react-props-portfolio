import React, { Component } from 'react';
import Skills from './components/Skills.js';
import SkillList from './components/SkillList.js';
import EducationHistory from './components/EducationHistory.js';
import WorkHistory from './components/WorkHistory.js';

class App extends Component {

  __generateSkillJsx(){
    const skillsArrayJsx = this.props.skillList.map(function(skillStr, i){

    return <Skills portfolioSkill={skillStr} key={i} />
    })
    return skillsArrayJsx
  }

  __generateEducationJsx(){
    const educationArrayjsx = this.props.eduList.map(function(eduObj, i){

    return <EducationHistory
      school = {eduObj.institute}
      degree = {eduObj.fieldOfStudy}
      year = {eduObj.dates}
      key = {i}
      />
    })
    return educationArrayjsx
  }

  __generateWorkJsx(){
    const workArrayjsx = this.props.jobList.map(function(workObj, i){

    return <WorkHistory
      end = {workObj.years.end}
      start = {workObj.years.start}
      title = {workObj.title}
      company = {workObj.company}
      description = {workObj.description}
      key = {i}
      />
    })

    return workArrayjsx
  }

  render() {
    console.log(this.props)
    return (
      <div className="App" id="app-container">
        <section>
          <SkillList />
          <div className="skills-list">
            { this.__generateSkillJsx() }
          </div>
        </section>

        <section>
          <h4>Education</h4>
          <div className="degree-list">
            { this.__generateEducationJsx() }
          </div>
        </section>

        <section>
          <h4>Work Experience</h4>
          <div className="job-timeline">
            { this.__generateWorkJsx() }
          </div>
        </section>
      </div>
    );
  }
}

export default App;
