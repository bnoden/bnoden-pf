import React from 'react';

import { quorasvg, qp } from './projects/img/concept';
import './style/Idea.css';

const Idea = () =>
  <div>
    <div>
      <img className="header_logo" src={quorasvg} alt="logo" />
    </div>
    <hr className="qhr" />
    <p className="ququ">I'm an idea guy. How do I turn that into a career?</p>
    <div className="qpp">
      <div>
        <img className="profile_photo" src={qp} alt="qpimgg" />
      </div>
      <div>
        Mike Castles, Software Engineer turned Stock Photo Model<br />
        <p className="answer-time">Answered 19hr ago</p>
      </div>
    </div>
    <p style={{ fontSize: '15px', marginTop: '-0.05em' }}>
      I had a friend in high school. He was an 'idea guy.' But his ideas were
      short-lived, much like his life...{' '}
      <a
        style={{
          textDecoration: 'none',
          color: '#2b6dad',
          cursor: 'pointer'
        }}
      >
        (more)
      </a>
    </p>
  </div>;

export default Idea;
