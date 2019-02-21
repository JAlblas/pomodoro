export const startTimerAction = (session_type) =>
  (dispatch, getState) => {
    const time = getState().session.session * 60;
    dispatch({ type: 'START_TIMER', time: time });
  };

export const stopTimerAction = () => {
  return {
    type: 'STOP_TIMER'
 }
}

export const updateTimerAction = (time) => {
  return {
    type: 'UPDATE_TIMER',
    time: time
 }
}

export const resetAction = () => {
 return {
  type: 'RESET'
 }
}

export const tickAction = () => {
  return {
    type: "TIMER_TICK"
  }
};
