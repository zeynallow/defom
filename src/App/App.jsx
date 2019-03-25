import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';

//Auth
import { Login } from '../Account/Login';
import { CreateAccount } from '../Account/CreateAccount';

//Layout
import { Header } from '../Layout/Header';
import { Footer } from '../Layout/Footer';

//Home
import { Home } from '../Home/Home';

//Topic
import { CreateTopic } from '../Topic/CreateTopic';
import { SingleTopic } from '../Topic/SingleTopic';
import { CategoryTopic } from '../Topic/CategoryTopic';




class App extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }



  render() {
    const { alert } = this.props;
    return (
      <div>
        <Router history={history}>
          <Header />

          {alert.message &&
            <div className={`alert ${alert.type}`}>{alert.message}</div>
          }

          <div>
            <PrivateRoute path="/create-topic" component={CreateTopic} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={CreateAccount} />
            <Route path="/home" component={Home} />
            <Route exact path="/" component={Home} />
            <Route path="/topic/:post_id/:post_slug" component={SingleTopic} />
            <Route path="/category/:category_id/:category_slug" component={CategoryTopic} />
            <Route path="/create-account" component={CreateAccount} />
          </div>
          <Footer />
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
