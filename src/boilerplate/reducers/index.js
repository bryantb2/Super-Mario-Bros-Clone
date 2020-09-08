import { combineReducers } from 'redux';

// reducers
import scoreBoardReducer from './scoreboardReducer';
import levelReducer from "./levelReducer";
import gameplayReducer from "./gameplayReducer";

// combined reducer
export default combineReducers({
    scoreboard: scoreBoardReducer,
    loadedLevel: levelReducer,
    gameplay: gameplayReducer
});