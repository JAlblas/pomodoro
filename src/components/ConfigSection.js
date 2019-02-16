import React, { Component } from 'react';
import { connect } from 'react-redux';

import { incrementSession } from './../actions/incrementSession';

const mapStateToProps = state => ({
 //...state
 "session": state.session.session
})

const mapDispatchToProps = dispatch => ({
 incrementSession: () => dispatch(incrementSession())
})

const ConfigSection = (props) =>
  <div className="settings">
    <p id="session-label">Session:</p>
    <p id="session-length">{props.session}</p>
    <button id="session-decrement">-</button>
    <button id="session-increment" onClick={props.incrementSession}>+</button>
    <p id="break-label">Break:</p>
    <p id="break-length">5</p>
    <button id="break-decrement">-</button>
    <button id="break-increment">+</button>
  </div>

  export default connect(mapStateToProps, mapDispatchToProps)(ConfigSection);
