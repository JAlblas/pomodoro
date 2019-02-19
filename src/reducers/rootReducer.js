import { combineReducers } from 'redux';

import toggleTimerReducer from './timerControlReducer';
import sessionReducer from './sessionReducer';
import breakReducer from './breakReducer';

const appReducer = combineReducers({
 "timer": toggleTimerReducer,
 "session": sessionReducer,
 "break": breakReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET') {
    state = undefined
  }
  return appReducer(state, action)
};

export default rootReducer;
