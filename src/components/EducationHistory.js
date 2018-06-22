import React, { Component } from 'react';

class EducationHistory extends Component {
  render() {
    return (
      <div className="degree">
        <h5 className="degree__institute"> {this.props.school }</h5>
        <p className="degree__field">{this.props.degree}</p>
        <p className="degree__dates">{this.props.dates}</p>
      </div>
    );
  }
}

export default EducationHistory;
