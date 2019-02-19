const initialState = {
  runningTimer: false
};

export default (state = initialState, action) => {
   switch (action.type) {
    case 'TOGGLE_TIMER':
      return Object.assign({}, state, {
        runningTimer: !state.runningTimer
      });
    default:
     return state
   }
}
