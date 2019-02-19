import React from 'react';
import { connect } from 'react-redux';

import { startTimerAction, stopTimerAction, resetAction, tickAction } from './../actions/timerControl';

const mapStateToProps = state => ({
 ...state
 //toggleTimer": state.toggleTimerReducer.runningTimer
})

const mapDispatchToProps = dispatch => ({
  startTimer: () => dispatch(startTimerAction()),
  stopTimer: () => dispatch(stopTimerAction()),
  resetAction: () => dispatch(resetAction()),
  tick: () => dispatch(tickAction())
})

const ButtonSection = (props) =>
  <div id="buttonSection">
    <button id="start_stop" onClick={props.startTimerAction}>Start/stop timer</button>
    <button id="reset" onClick={props.resetAction}>Reset timer</button>
  </div>

export default connect(mapStateToProps, mapDispatchToProps)(ButtonSection);
