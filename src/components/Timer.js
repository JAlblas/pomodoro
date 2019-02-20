import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateTimerAction } from './../actions/timerControl';


const mapStateToProps = state => ({
   "toggleTimer": state.timer.runningTimer,
   "timeLeft": state.timer.timeLeft
})

const mapDispatchToProps = dispatch => ({
   "updateTime": dispatch(updateTimerAction())
})

class Timer extends Component {

 render() {
  return (
      <div className="timer-section">
          <h2 id="timer-label">Session</h2>
          <p id="time-left"></p>
      </div>
    );
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
