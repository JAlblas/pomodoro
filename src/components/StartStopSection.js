import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startTimerAction, stopTimerAction, resetAction, tickAction, updateTimerAction } from './../actions/timerControl';

const mapStateToProps = state => ({
 "timerRunning": state.timer.runningTimer,
 "startDate": state.timer.startDate,
 "timeLeft": state.timer.timeLeft
})

const mapDispatchToProps = dispatch => ({
  startTimer: (time) => dispatch(startTimerAction(time)),
  stopTimer: () => dispatch(stopTimerAction()),
  resetAction: () => dispatch(resetAction()),
  updateTimer: (time) => dispatch(updateTimerAction(time))
})

class StartStopSection extends Component {
    constructor(){
     super();
     this.trigger = this.trigger.bind(this);
     this.start = this.start.bind(this);
     this.stop = this.stop.bind(this);
     this.update = this.update.bind(this);
   }

   componentWillUnmount() {
    this.stop();
  }

  trigger() {
    if (this.props.timerRunning === true) {
      this.stop();
    } else {
      console.log("start");
      this.start();
    }
  }

  start() {
    this.props.startTimer(this.props.timeLeft);
    this.interval = setInterval(() => {
      this.update();
    }, 1000);
  }

  stop() {
    console.log("STOP")
    console.log(this.interval);
    clearInterval(this.interval);
  }

  update() {
    if (this.props.timeLeft === 0) {
      this.stop();
      this.props.resetAction();
    } else {
      this.props.updateTimer();
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(StartStopSection);
