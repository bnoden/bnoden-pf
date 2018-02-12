import React from 'react';

import extlink from '../img/extlink.png';

const About = () =>
  <div className="about">
    <p>
      Hi, my name is Brandon Oden. I develop applications and interfaces for
      various platforms and devices. Right now my time is invested in Node.js
      and the MERN stack.
    </p>
    <p>Thank you for visiting.</p>
    <h2>Contact</h2>
    <div style={styles.extlinkDivStyle}>
      <input
        value="brandon.oden1@gmail.com"
        className="contact-info"
        readOnly
        style={{ width: '16.5em' }}
      />
      <a href="mailto:brandon.oden1@gmail.com" rel="noopener noreferrer" target="_blank">
        <img src={extlink} style={styles.extlinkStyle} alt="open link" />
      </a>
    </div>
    <div style={styles.extlinkDivStyle}>
      <input
        value="linkedin.com/in/bnoden"
        className="contact-info"
        readOnly
        style={{ width: '16.5em' }}
      />
      <a href="//linkedin.com/in/bnoden" rel="noopener noreferrer" target="_blank">
        <img src={extlink} style={styles.extlinkStyle} alt="open link" />
      </a>
    </div>
    <h2>Other</h2>
    <div style={styles.extlinkDivStyle}>
      <input
        value="github.com/bnoden"
        className="contact-info"
        readOnly
        style={{ width: '16.5em' }}
      />
      <a href="//github.com/bnoden" rel="noopener noreferrer" target="_blank">
        <img src={extlink} style={styles.extlinkStyle} alt="open link" />
      </a>
    </div>
  </div>;

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
