import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Headroom from 'react-headroom';

import Header from './Header';
import Home from './Home';
import About from './About';
import { crDir, crYear } from './access';
import { Current, Old, Fun, Concept, Misc } from './ProjectIndex';

import './style/App.css';

class App extends Component {
  render() {
    return (
      <div style={appStyle}>
        <Headroom>
          <Header />
          
        </Headroom>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/current" component={Current} />
            <Route path="/fun" component={Fun} />
            <Route path="/concept" component={Concept} />
            <Route path="/misc" component={Misc} />
            <Route path="/old" component={Old} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
        <div>
          <p dir={crDir()} className="copy-right">
            <strong>
              &copy;{crYear()} Brandon Oden
            </strong>
          </p>
        </div>
      </div>
    );
  }
}

const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
};

export default App;
