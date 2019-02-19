const initialState = {
  session: 25
};

export default (state = initialState, action) => {
   switch (action.type) {
    case 'INCREMENT_SESSION':
      if (state.session < 60) {
        return Object.assign({}, state, {
          session: state.session + 1
        });
      } else {
        return state;
      }
    case 'DECREMENT_SESSION':
      if (state.session > 1) {
        return Object.assign({}, state, {
          session: state.session - 1
        });
      } else {
        return state;
      }
    default:
     return state
   }
}
