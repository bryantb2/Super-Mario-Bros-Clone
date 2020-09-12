import actionTypes from "../actionTypes";

export const loadLevelData = (worldId, levelId) => dispatch => (
    dispatch({
        type: actionTypes.LOAD_LEVEL_DATA,
        payload: {
            worldId,
            levelId
        }
    })
);

export const resetLevelAndWorld = () => dispatch => (
    dispatch({ type: actionTypes.RESET_LEVEL_WORLD })
);
