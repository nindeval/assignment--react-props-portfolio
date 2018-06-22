import React, { Component } from 'react';

class Skills extends Component {
  render() {
    return (
      <div className="skills-list__single">
        <span>{this.props.portfolioSkill}</span>
      </div>
    );
  }
}

export default Skills;
