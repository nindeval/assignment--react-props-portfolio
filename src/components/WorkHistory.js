import React, { Component } from 'react';

class WorkHistory extends Component {
  render() {
    return (
      <div className="job">
        <div className="job__years">
          <h6 className="job__end">{this.props.end}</h6>
          <h6 className="job__start">{this.props.start}</h6>
        </div>
        <h5 className="job__title">{this.props.title}</h5>
        <h5 className="job__company">{this.props.company}</h5>
        <p className="job__description">{this.props.description}</p>
      </div>
    );
  }
}

export default WorkHistory;
