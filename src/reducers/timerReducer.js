const initialState = {
  runningTimer: false,
  timeLeft: 0,
  startDate: Date()
};

export default (state = initialState, action) => {
   switch (action.type) {
    case 'START_TIMER':
      return {
        ...state,
        timeLeft: 0,
        runningTimer: true
      };
    case 'STOP_TIMER':
      return {
        ...state,
        runningTimer: false
      };
    case 'TIMER_TICK':
      return state;
    default:
     return state
   }
}
