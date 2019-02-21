import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateTimerAction } from './../actions/timerControl';

const mapStateToProps = state => ({
   "runningTimer": state.timer.runningTimer,
   "timeLeft": state.timer.timeLeft,
   "timeMode": state.timer.session
})

class Timer extends Component {
  constructor(){
   super();
   this.displayCountdown = this.displayCountdown.bind(this);
  }

  displayCountdown(secondsLeft) {
    let timeObj = { minutes: "", seconds: "" };

    // clear countdown when date is reached
    if (secondsLeft <= 0) return false;

    if (secondsLeft >= 60) {
      timeObj.minutes = Math.floor(secondsLeft / 60);
      secondsLeft -= timeObj.minutes * 60;
    }

    if (secondsLeft.toString().length === 1) {
      timeObj.seconds = secondsLeft.toString() + "0";
    } else {
      timeObj.seconds = secondsLeft.toString();
    }

    return timeObj.minutes + ":" + timeObj.seconds;
}

 render() {
  return (
      <div className="timer-section">
          <h2 id="timer-label">Session</h2>
          <p id="time-left">{this.props.timeLeft !== undefined ? this.displayCountdown(this.props.timeLeft) : "0:00"}</p>
      </div>
    );
 }
}

export default connect(mapStateToProps)(Timer);
