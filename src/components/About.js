import React from 'react';

const About = () =>
  <div className="about">
    <p>
      Hi, my name is Brandon Oden. I develop applications and interfaces for
      various platforms and devices. Right now you could call me a Node.js
      developer with a preference for the MERN stack.
    </p>
    <p>
      If you notice the website doing anything strange, relax, it's probably an
      easter egg.<br />
      Thank you for visiting.
    </p>
    <h2>Contact</h2>
    <p>
      <input
        value="brandon.oden1@gmail.com"
        className="contact-info"
        readOnly
      />
    </p>
    <p>
      <input
        value="https://www.linkedin.com/in/bnoden"
        className="contact-info"
        readOnly
        style={{ width: '16.5em' }}
      />
    </p>
    <h2>Other</h2>
    <p>
      <input
        value="https://github.com/bnoden"
        className="contact-info"
        readOnly
        style={{ width: '12.5em' }}
      />
    </p>
  </div>;

export default About;
