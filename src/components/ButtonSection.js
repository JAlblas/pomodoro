import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startTimerAction, stopTimerAction, resetAction, tickAction, updateTimerAction } from './../actions/timerControl';

const mapStateToProps = state => ({
 "timerRunning": state.timer.runningTimer,
 "startDate": state.timer.startDate
})

const mapDispatchToProps = dispatch => ({
  startTimer: () => dispatch(startTimerAction()),
  stopTimer: () => dispatch(stopTimerAction()),
  resetAction: () => dispatch(resetAction()),
  tick: () => dispatch(tickAction()),
  updateTimer: (time) => dispatch(updateTimerAction(time))
})

class ButtonSection extends Component {
    constructor(){
     super();
     this.trigger = this.trigger.bind(this);
     this.start = this.start.bind(this);
     this.stop = this.stop.bind(this);
     this.calculateCountdown = this.calculateCountdown.bind(this);
   }

   componentWillUnmount() {
    this.stop();
  }

  trigger() {
    if (this.props.timerRunning === true) {
      this.stop();
    } else {
      this.start();
    }
  }

  start() {
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(this.props.startDate != null ? this.props.startDate : Date());
      console.log(date);
      this.props.updateTimer(date);
      //date ? this.setState(date) : this.stop();
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
  }

  calculateCountdown(endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;
    console.log(diff)
    // clear countdown when date is reached
    if (diff <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      millisec: 0,
    };

    // calculate time difference between now and expected date
    if (diff >= (365.25 * 86400)) { // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) { // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) { // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
}

 render() {
  return (
    <div id="buttonSection">
      <button id="start_stop" onClick={this.trigger}>Start/stop timer</button>
      <button id="reset" onClick={this.props.resetAction}>Reset timer</button>
    </div>
    );
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonSection);
