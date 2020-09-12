import actionTypes from '../actionTypes';
import { playerData } from "../../gameConfig";

const initialState = {
    size: playerData.SMALL_MARIO,
    position: {
        x: 10,
        y: 100
    },
    currentUpgrade: null
};

export default (state = initialState, action) => {
    const newState = {...state};
    switch(action.type) {
        // position
        case actionTypes.SET_PLAYER_POSITION:
            newState.position = action.payload;
            return newState;
        case actionTypes.RESET_PLAYER_POSITION:
            newState.position = initialState.position;
            return newState;
        // size
        case actionTypes.SET_PLAYER_SIZE:
            newState.size = action.payload;
            return newState;
        case actionTypes.RESET_PLAYER_SIZE:
            newState.size = initialState.size;
            return newState;
        // upgrade
        case actionTypes.SET_PLAYER_UPGRADE:
            newState.currentUpgrade = action.payload;
            return newState;
        case actionTypes.RESET_PLAYER_UPGRADE:
            newState.currentUpgrade = initialState.currentUpgrade;
            return newState;
        default:
            return newState;
    }
}