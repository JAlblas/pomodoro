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
      <div className="row mt-5">
        <div className="col-md-4 offset-md-1">
          <h2>{JSON.stringify(this.props.toggleTimer)}</h2>
          <a href="#">{this.props.toggleTimer}</a>
          <p>New: {this.props.toggleTimer}</p>
        </div>
      </div>
    );
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
