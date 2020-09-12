import actionTypes from "../actionTypes";

export const setPlayerPosition = (xPos, yPos) => dispatch => (
    dispatch({
        type: actionTypes.SET_PLAYER_POSITION,
        payload: {x: xPos, y: yPos}
    })
);

export const resetPlayerPosition = () => dispatch => (
    dispatch({ type: actionTypes.RESET_PLAYER_POSITION })
);

export const setPlayerSize = (size) => dispatch => (
    dispatch({
        type: actionTypes.SET_PLAYER_SIZE,
        payload: size
    })
);

export const resetPlayerSize = (size) => dispatch => (
    dispatch({ type: actionTypes.RESET_PLAYER_SIZE })
);

export const setPlayerUpgrade = (upgradeItem) => dispatch => (
    dispatch({
        type: actionTypes.SET_PLAYER_UPGRADE,
        payload: upgradeItem
    })
);

export const resetPlayerUpgrade = () => dispatch => (
    dispatch({ type: actionTypes.RESET_PLAYER_UPGRADE })
);

export const resetAllPlayerData = () => dispatch => (
    dispatch({ type: actionTypes.RESET_ALL_PLAYER_DATA })
);

