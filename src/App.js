import React, { Component } from 'react';
import Auth from './components/auth'
import Calendar from './components/calendar'
import Overview from './containers/Overview'
import ActiveUsers from './containers/ActiveUsers'
import TotalValue from './containers/TotalValue'

class App extends Component {

  render() {
    // <Calendar />
    // <Overview />
    // <ActiveUsers />
    return (
      <div>
        <Auth />

        <TotalValue />
      </div>
    )
  }
}

export default App;
