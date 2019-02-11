import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import toggleTimerReducer from './toggleTimerReducer';

export default combineReducers({
 simpleReducer,
 toggleTimerReducer
});
