import React from 'react';
import { connect } from 'react-redux';

import { incrementSession, decrementSession } from './../actions/editSession';
import { incrementBreak, decrementBreak } from './../actions/editBreak';

const mapStateToProps = state => ({
 //...state
 "sessionTime": state.session.session,
 "breakTime": state.break.break
})

const mapDispatchToProps = dispatch => ({
 incrementSession: () => dispatch(incrementSession()),
 decrementSession: () => dispatch(decrementSession()),
 incrementBreak: () => dispatch(incrementBreak()),
 decrementBreak: () => dispatch(decrementBreak())
})

const ConfigSection = ({sessionTime,breakTime,decrementSession,incrementSession,
  decrementBreak,incrementBreak}) =>
  <div className="settings">
    <p id="session-label">Session:</p>
    <p id="session-length">{sessionTime}</p>
    <button id="session-decrement" onClick={decrementSession}>-</button>
    <button id="session-increment" onClick={incrementSession}>+</button>
    <p id="break-label">Break:</p>
    <p id="break-length">{breakTime}</p>
    <button id="break-decrement" onClick={decrementBreak}>-</button>
    <button id="break-increment" onClick={incrementBreak}>+</button>
  </div>

  export default connect(mapStateToProps, mapDispatchToProps)(ConfigSection);
