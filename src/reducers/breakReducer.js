const initialState = {
  break: 5
};

export default (state = initialState, action) => {
   switch (action.type) {
    case 'INCREMENT_BREAK':
      if (state.break < 60) {
        return Object.assign({}, state, {
          break: state.break + 1
        });
      } else {
        return state;
      }
    case 'DECREMENT_BREAK':
      if (state.break > 1) {
        return Object.assign({}, state, {
          break: state.break - 1
        });
      } else {
        return state;
      }
    default:
     return state
   }
}
