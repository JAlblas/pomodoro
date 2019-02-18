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
  simpleAction = (event) => {
   this.props.simpleAction();
  }

 render() {
  return (
   <div className="App">
    <h1>Pomodoro clock</h1>
    <Timer runningTimer={this.props.toggleTimer.runningTimer}/>
    <ConfigSection />
    <button id="start_stop" onClick={this.props.toggleTimerAction}>Start/stop timer</button>
    <button id="reset" onClick={this.props.resetAction}>Reset timer</button>
    <p>TEST: {JSON.stringify(this.props.toggleTimer.runningTimer)}</p>

   </div>
  );
 }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
