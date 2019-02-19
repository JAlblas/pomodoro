import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
   "toggleTimer": state.timer.runningTimer
})

const mapDispatchToProps = dispatch => ({
})

class Timer extends Component {

 render() {
  return (
      <div className="timer-section">
          <h2 id="timer-label">Session</h2>
          <p id="time-left">01:00</p>
      </div>
    );
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
