import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Headroom from 'react-headroom';

import Header from './Header';
import Home from './Home';
import About from './About';
import { crYear } from './access';
import { Current, Old, Fun, Concept, Misc } from './ProjectIndex';

import './style/App.css';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div style={appStyle}>
        <Headroom>
          <Header />
        </Headroom>

        <div className="content">
          <Switch>
            <Route path="/current" component={Current} />
            <Route path="/fun" component={Fun} />
            <Route path="/concept" component={Concept} />
            <Route path="/misc" component={Misc} />
            <Route path="/old" component={Old} />
            <Route path="/about" component={About} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>

        <div>
          <p className="copy-right">
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
