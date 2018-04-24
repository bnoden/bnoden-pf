import React from 'react';

import { my } from './access';
import extlink from '../img/extlink.png';

const About = () => (
  <div className="about">
    <p>
      Hi, my name is Brandon Oden. I develop applications and interfaces for
      various platforms and devices. I am familiar with a wide range of
      technologies and always open to new things, though what you see here at
      the moment is mostly within the realm of Node.js and the MERN stack.
    </p>
    <p>Thank you for visiting.</p>
    <h2>Contact</h2>
    <div style={styles.extlinkDivStyle}>
      <input
        value={my.email}
        className="contact-info"
        readOnly
        style={{ width: '16.5em' }}
      />
      <a href={`mailto:${my.email}`} rel="noopener noreferrer" target="_blank">
        <img src={extlink} style={styles.extlinkStyle} alt="open link" />
      </a>
    </div>
    <div style={styles.extlinkDivStyle}>
      <input
        value={my.linkedin}
        className="contact-info"
        readOnly
        style={{ width: '16.5em' }}
      />
      <a href={`https://${my.linkedin}`} rel="noopener noreferrer" target="_blank">
        <img src={extlink} style={styles.extlinkStyle} alt="open link" />
      </a>
    </div>
    <h2>Other</h2>
    <div style={styles.extlinkDivStyle}>
      <input
        value={my.github}
        className="contact-info"
        readOnly
        style={{ width: '16.5em' }}
      />
      <a href={`https://${my.github}`} rel="noopener noreferrer" target="_blank">
        <img src={extlink} style={styles.extlinkStyle} alt="open link" />
      </a>
    </div>
  </div>
);

const styles = {
  extlinkStyle: {
    maxWidth: '1.5em',
    height: 'auto',
    paddingLeft: '0.5em'
  },
  extlinkDivStyle: {
    display: 'flex',
    flexDirection: 'row'
  }
};

export default About;
