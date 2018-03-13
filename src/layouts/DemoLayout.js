import React from 'react';

import createHistory from 'history/createBrowserHistory'

import { connect } from 'dva';

import { ConnectedRouter } from 'react-router-redux'

import { Route } from 'react-router'

const history = createHistory()

function Home() {
  return <div>home</div>
}
function About() {
  return <div>About</div>
}
function Topics() {
  return <div>Topics</div>
}

class DemoLayout extends React.PureComponent {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div>
          <a href="/demo">home</a>
          <a href="/about">about</a>
          <Route exact path="/demo" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/topics" component={Topics}/>
        </div>
      </ConnectedRouter>
    );
  }
}

export default connect(({ user, global, loading }) => ({
  currentUser: user.currentUser,
  collapsed: global.collapsed,
  fetchingNotices: loading.effects['global/fetchNotices'],
  notices: global.notices,
}))(DemoLayout);
