import React, { Component } from 'react';
import { connect } from 'react-redux';

import Timer from './Timer.js';
import ConfigSection from './ConfigSection';

import './App.css';

import { toggleTimerAction, resetAction } from './../actions/timerControl';

const mapStateToProps = state => ({
 ...state
 //toggleTimer": state.toggleTimerReducer.runningTimer
})

const mapDispatchToProps = dispatch => ({
 toggleTimerAction: () => dispatch(toggleTimerAction()),
 resetAction: () => dispatch(resetAction())
})

class App extends Component {

 render() {
  return (
   <div className="App">
    <h1>Pomodoro clock</h1>
    <Timer runningTimer={this.props.timer.runningTimer}/>
    <ConfigSection />
    <button id="start_stop" onClick={this.props.toggleTimerAction}>Start/stop timer</button>
    <button id="reset" onClick={this.props.resetAction}>Reset timer</button>
    <h3>{JSON.stringify(this.props)}</h3>
   </div>
  );
 }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
