import React, { Component } from 'react';

import './style/Project.css';

class Project extends Component {
  render() {
    return (
      <div className="project">
        <div className="project-name">
          <a href={this.props.href} rel="noopener noreferrer" target="_blank">
            {this.props.name}
          </a>
        </div>
        <div className="project-description">
          {this.props.description}
        </div>
        <div className="project-image">
          <a href={this.props.href} rel="noopener noreferrer" target="_blank">
            {this.props.image}
          </a>
        </div>
        <div className="project-notes">
          <p>
            {this.props.notes}
          </p>
        </div>
        <div className="project-tags">
          <p>
            Tags: {this.props.tags ? this.props.tags : 'none'}
          </p>
        </div>
      </div>
    );
  }
}

export default Project;
