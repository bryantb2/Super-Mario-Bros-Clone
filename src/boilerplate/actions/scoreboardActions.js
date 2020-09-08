import actionTypes from "../actionTypes";

// main game score
export const addPointScore = (pointValue) => dispatch => (
    dispatch({
        type: actionTypes.ADD_POINT_SCORE,
        payload: pointValue
    })
);

export const resetPointScore = () => dispatch => (
    dispatch({ type: actionTypes.RESET_POINT_SCORE })
);

// remaining player lives
export const addPlayerLives = (lifeNumber) => dispatch => (
    dispatch({
        type: actionTypes.ADD_PLAYER_LIVES,
        payload: lifeNumber
    })
);

export const removePlayerLife = (lifeNumber) => dispatch => (
    dispatch({
        type: actionTypes.REMOVE_PLAYER_LIFE,
        payload: lifeNumber
    })
);

export const resetPlayerLives = () => dispatch => (
    dispatch({ type: actionTypes.RESET_PLAYER_LIVES })
);

// scoreboard coins
export const addCoins = (coinNumber) => dispatch => (
    dispatch({
        type: actionTypes.ADD_COINS,
        payload: coinNumber
    })
);

export const resetCoins = (coinNumber) => dispatch => (
    dispatch({
        type: actionTypes.ADD_COINS,
        payload: coinNumber
    })
);

// scoreboard timer
export const startLevelTimer = () => dispatch => (
    dispatch({ type: actionTypes.START_LEVEL_TIMER })
);

export const decrementLevelTimer = () => dispatch => (
    dispatch({ type: actionTypes.DECREMENT_TIMER })
);

export const resetLevelTimer = () => dispatch => (
    dispatch({ type: actionTypes.RESET_LEVEL_TIMER })
);

// nuke scoreboard
export const resetScoreboard = () => dispatch => (
    dispatch({ type: actionTypes.RESET_ENTIRE_SCOREBOARD })
);