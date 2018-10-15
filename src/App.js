import React, { Component } from 'react';
import Auth from './components/auth'
import Calendar from './components/calendar'
import Overview from './containers/Overview'
import ActiveUsers from './containers/ActiveUsers'

class App extends Component {

  render() {
    return (
      <div>
        <Auth />
        <Calendar />
        <Overview />
        <ActiveUsers />
      </div>
    )
  }
}

export default App;
