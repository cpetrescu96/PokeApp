import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {} from 'react-apollo';
import { ApolloConsumer } from 'react-apollo';
import ListPageRoute from '../../containers/ListPageRoute/ListPageRoute';

const wrapper = {
  width: '700px',
  padding: '10px',
  margin: 'auto'
};

export class Layout extends Component {
  render() {
    return (
      <Router>
        <div style={wrapper}>
          <Route path='/' exact component={ListPageRoute} />
          <Route
            path='/details/:id'
            render={props => {
              console.log(props);
              return 'details';
            }}
          />
        </div>
      </Router>
    );
  }
}

export default Layout;

//   <Route path="/topics" component={ListPageRoute} />
