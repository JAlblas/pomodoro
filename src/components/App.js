import React, { Component } from 'react';
import { connect } from 'react-redux';

import Timer from './Timer.js';
import ConfigSection from './ConfigSection';
import ButtonSection from './ButtonSection';

import './App.css';



const mapStateToProps = state => ({
 ...state
 //toggleTimer": state.toggleTimerReducer.runningTimer
})

const mapDispatchToProps = dispatch => ({
})

class App extends Component {

 render() {
  return (
   <div className="App">
    <h1>Pomodoro clock</h1>
    <Timer />
    <ConfigSection />
    <ButtonSection />
    <h3>{JSON.stringify(this.props)}</h3>
   </div>
  );
 }
}
export default connect(mapStateToProps)(App);
