import { combineReducers } from 'redux';

// reducers
import scoreBoardReducer from './scoreboard';

// combined reducer
export default combineReducers({
    scoreboard: scoreBoardReducer
});