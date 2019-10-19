import React, { Component } from 'react';
import Topbar from './TopBar';
import SideBar from './SideBar';

class App extends Component {

  render() {
    return (
      <div>
         <Topbar/>
         <SideBar/>
      </div>
    );
  }
}

export default App;
