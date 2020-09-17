import actionTypes from '../actionTypes';
import {
    playerSize,
    baseUnitSize,
    gameGrid,
    playerMovement
} from "../../gameConfig";

const initialState = {
    size: playerSize[0].id,
    position: {
        x: baseUnitSize().WIDTH,
        y: baseUnitSize().HEIGHT * (gameGrid.RENDERABLE_HEIGHT - 3.5),
        movementType: playerMovement.STAND
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
        // reset all data
        case actionTypes.RESET_ALL_PLAYER_DATA:
            return initialState;
        default:
            return newState;
    }
}