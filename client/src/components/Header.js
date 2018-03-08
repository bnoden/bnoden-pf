import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul onInput={window.scrollTo(0, 0)}>
            <li>
              <Link to="/current">Current</Link>
            </li>
            <li>
              <Link to="/fun">Fun</Link>
            </li>
            <li>
              <Link to="/concept">Concept</Link>
            </li>
            <li>
              <Link to="/misc">Misc</Link>
            </li>
            <li>
              <Link to="/old">Old</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <hr />
      </header>
    );
  }
}

export default Header;
