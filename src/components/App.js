import React, { Component } from 'react';
import { connect } from 'react-redux';

import Timer from './Timer.js';
import ConfigSection from './ConfigSection';
import StartStopSection from './StartStopSection';

import './App.css';

const mapStateToProps = state => ({
 ...state
})

class App extends Component {

 render() {
  return (
   <div className="App">
    <h1>Pomodoro clock</h1>
    <Timer />
    <StartStopSection />
    <ConfigSection />
    <h3>{JSON.stringify(this.props)}</h3>
   </div>
  );
 }
}
export default connect(mapStateToProps)(App);
