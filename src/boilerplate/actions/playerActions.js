import actionTypes from "../actionTypes";

// position actions
export const setPlayerPosition = (xPos, yPos, movementType) => dispatch => (
    dispatch({
        type: actionTypes.SET_PLAYER_POSITION,
        payload: { x: xPos, y: yPos, movementType }
    })
);

export const resetPlayerPosition = () => dispatch => (
    dispatch({ type: actionTypes.RESET_PLAYER_POSITION })
);

// size actions
export const setPlayerSize = (size) => dispatch => (
    dispatch({
        type: actionTypes.SET_PLAYER_SIZE,
        payload: size
    })
);

export const resetPlayerSize = (size) => dispatch => (
    dispatch({ type: actionTypes.RESET_PLAYER_SIZE })
);

// upgrade actions
export const setPlayerUpgrade = (upgradeItem) => dispatch => (
    dispatch({
        type: actionTypes.SET_PLAYER_UPGRADE,
        payload: upgradeItem
    })
);

export const resetPlayerUpgrade = () => dispatch => (
    dispatch({ type: actionTypes.RESET_PLAYER_UPGRADE })
);

// nuclear option
export const resetAllPlayerData = () => dispatch => (
    dispatch({ type: actionTypes.RESET_ALL_PLAYER_DATA })
);


