import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/pages/About";
import Discover from "./components/pages/Discover";
import Search from "./components/pages/Search";
import Navpills from "./components/Navpills";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navpills />
          <Route exact path="/about" component={About}/>
          <Route exact path="/discover" component={Discover}/>
          <Route exact path="/search" component={Search} />
        </div>
      </Router>
    );
  }
}

export default App;
