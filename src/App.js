import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//Layout
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';

//Home
import Home from './Components/Home';

//Topic
import CreateTopic from './Components/Topic/CreateTopic';
import SingleTopic from './Components/Topic/SingleTopic';

//Profile
import CreateAccount from './Components/Account/CreateAccount';

class App extends Component {

  render() {
    return (
      <div className="App">

      <Router>
        <Header />
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/create-topic" component={CreateTopic} />
          <Route path="/topic" component={SingleTopic} />
          <Route path="/create-account" component={CreateAccount} />
        <Footer />
      </Router>

      </div>
    );
  }
}

export default App;
