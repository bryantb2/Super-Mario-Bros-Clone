import actionTypes from '../actionTypes';

const initialState = {
    topScore: 0,
    points: 0,
    lives: 4,
    coins: 0,
    levelTimer: 400 // in seconds
};

export default (state = initialState, action) => {
    const newState = {...state};
    switch(action.type) {
        // score points
        case actionTypes.ADD_POINT_SCORE:
            newState.points += action.payload;
            return newState;
        case actionTypes.RESET_POINT_SCORE:
            newState.points = 0;
            return newState;
        // lives
        case actionTypes.ADD_PLAYER_LIVES:
            newState.lives += action.payload;
            return newState;
        case actionTypes.REMOVE_PLAYER_LIFE:
            newState.lives -= action.payload;
            return newState;
        case actionTypes.RESET_PLAYER_LIVES:
            newState.lives = 4;
            return newState;
        // coins
        case actionTypes.ADD_COINS:
            newState.coins += action.payload;
            return newState;
        case actionTypes.RESET_COINS:
            newState.coins = 0;
            return newState;
        // level timing
        case actionTypes.START_LEVEL_TIMER:
            newState.levelTimer = Date.now();
            return newState;
        case actionTypes.DECREMENT_TIMER:
            newState.levelTimer -= 1;
            return newState;
        case actionTypes.RESET_LEVEL_TIMER:
            newState.levelTimer = 400;
            return newState;
        // top score
        case actionTypes.SET_TOP_SCORE:
            newState.topScore = action.payload;
            return newState;
        case actionTypes.FETCH_TOP_SCORE:
            newState.topScore = action.payload;
            return newState;
        // entire score board
        case actionTypes.RESET_ENTIRE_SCOREBOARD:
            const resetState = {...initialState};
            resetState.topScore = newState.topScore; // do not reset the top score
            return resetState;
        default:
            return newState;
    }
}