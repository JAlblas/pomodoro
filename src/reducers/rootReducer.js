import { combineReducers } from 'redux';

import toggleTimerReducer from './toggleTimerReducer';
import sessionReducer from './sessionReducer';

export default combineReducers({
 "toggleTimer": toggleTimerReducer,
 "session": sessionReducer
});
