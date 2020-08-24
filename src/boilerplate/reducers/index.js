import { combineReducers } from 'redux';

// reducers
import scoreBoardReducer from './scoreboardReducer';
import levelReducer from "./levelReducer";

// combined reducer
export default combineReducers({
    scoreboard: scoreBoardReducer,
    loadedLevel: levelReducer
});