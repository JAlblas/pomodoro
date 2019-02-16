import React, { Component } from 'react';
import { connect } from 'react-redux';

import Timer from './Timer.js';
import ConfigSection from './ConfigSection';

import logo from './../logo.svg';
import './App.css';

import { toggleTimerAction } from './../actions/toggleTimerAction';

const mapStateToProps = state => ({
 ...state
 //toggleTimer": state.toggleTimerReducer.runningTimer
})

const mapDispatchToProps = dispatch => ({
 toggleTimerAction: () => dispatch(toggleTimerAction())
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
    <button onClick={this.props.toggleTimerAction}>toggle TIMER</button>
    <ConfigSection />
    <pre>
     {
      JSON.stringify(this.props)
     }
    </pre>

    <p>TEST: {JSON.stringify(this.props.toggleTimer.runningTimer)}</p>

   </div>
  );
 }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
