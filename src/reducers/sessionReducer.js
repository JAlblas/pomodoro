const initialState = {
  session: 25
};

export default (state = initialState, action) => {
   switch (action.type) {
    case 'INCREMENT_SESSION':
      return Object.assign({}, state, {
        session: state.session += 1
      });
    default:
     return state
   }
}
