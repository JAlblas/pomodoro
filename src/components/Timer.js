import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
   "toggleTimer": state.toggleTimer.runningTimer
})

const mapDispatchToProps = dispatch => ({
})

class Timer extends Component {

 render() {
  return (
      <div className="timer-section">
          <h2 id="timer-label">Session</h2>
          <p id="time-left"></p>
          <h3>{JSON.stringify(this.props.toggleTimer)}</h3>
      </div>
    );
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
