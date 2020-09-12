import { combineReducers } from 'redux';

// reducers
import scoreBoardReducer from './scoreboardReducer';
import levelReducer from "./levelReducer";
import playerReducer from "./playerReducer";

// combined reducer
export default combineReducers({
    scoreboard: scoreBoardReducer,
    loadedLevel: levelReducer,
    player: playerReducer
});