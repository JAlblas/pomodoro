const initialState = {
  runningTimer: false,
  timeLeft: 1500,
  timeMode: "session"
};

export default (state = initialState, action) => {
   switch (action.type) {
    case 'START_TIMER':
      console.log("START_TIME:" + action.time)
      return {
        ...state,
        timeLeft: action.time,
        runningTimer: true
      };
    case 'STOP_TIMER':
      return {
        ...state,
        runningTimer: false
      };
    case 'UPDATE_TIMER':
    return Object.assign({}, state, {
      timeLeft: state.timeLeft - 1
    });
    default:
      return state;
   }
}
