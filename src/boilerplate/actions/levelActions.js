import actionTypes from "../actionTypes";

export const setCurrentWorld = (currentWorld) => dispatch => (
    dispatch({
        type: actionTypes.SET_CURRENT_WORLD,
        payload: currentWorld
    })
);


export const setCurrentLevel = (currentLevel) => dispatch => (
    dispatch({
        type: actionTypes.SET_CURRENT_LEVEL,
        payload: currentLevel
    })
);

export const resetLevelAndWorld = () => dispatch => (
    dispatch({ type: actionTypes.RESET_LEVEL_WORLD })
);
