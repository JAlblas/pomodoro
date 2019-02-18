import React from 'react';
import { connect } from 'react-redux';

import { incrementSession, decrementSession } from './../actions/editSession';
import { incrementBreak, decrementBreak } from './../actions/editBreak';

const mapStateToProps = state => ({
 //...state
 "session": state.session.session,
 "break": state.break.break
})

const mapDispatchToProps = dispatch => ({
   incrementSession: () => dispatch(incrementSession()),
   decrementSession: () => dispatch(decrementSession()),
   incrementBreak: () => dispatch(incrementBreak()),
   decrementBreak: () => dispatch(decrementBreak())
})

const ConfigSection = (props) =>
  <div className="settings">
    <p id="session-label">Session:</p>
    <p id="session-length">{props.session}</p>
    <button id="session-decrement" onClick={props.decrementSession}>-</button>
    <button id="session-increment" onClick={props.incrementSession}>+</button>

    <p id="break-label">Break:</p>
    <p id="break-length">{props.break}</p>
    <button id="break-decrement" onClick={props.decrementBreak}>-</button>
    <button id="break-increment" onClick={props.incrementBreak}>+</button>
  </div>

  export default connect(mapStateToProps, mapDispatchToProps)(ConfigSection);
