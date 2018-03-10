import React, { Component } from 'react';

import './style/Project.css';
import extlink from '../../img/extlink.png';

class Project extends Component {
  
  render() {
    return (
      <div className="project">
        <div
          className="project-name"
          style={{
            display: 'flex',
            flexDirection: 'row'
          }}
        >
          <a href={this.props.href} rel="noopener noreferrer" target="_blank">
            {this.props.name}
            <img
              src={this.props.href ? extlink : ''}
              style={extlinkStyle}
              alt={this.props.href ? 'open link' : ''}
            />
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
        <div className="project-multi-image">
          {this.props.multiImage}
        </div>
        <div className="project-notes">
          {this.props.notes}
        </div>
        <div className="project-tags">
          <p>
            Tags: {this.props.tags ? this.props.tags.join(', ') : 'none'}
          </p>
        </div>
      </div>
    );
  }
}

const extlinkStyle = {
  maxWidth: '0.9em',
  height: 'auto',
  paddingLeft: '0.5em'
};

export default Project;
