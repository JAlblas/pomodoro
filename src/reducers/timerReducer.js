const initialState = {
  runningTimer: false,
  timeLeft: {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
  },
  timeMode: "session",
  startDate: null
};

export default (state = initialState, action) => {
   switch (action.type) {
    case 'START_TIMER':
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
      return {
        ...state,
        timeLeft: action.time
      };
    default:
      return state;
   }
}
