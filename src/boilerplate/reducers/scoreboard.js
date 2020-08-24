import actionTypes from '../actionTypes';

const initialState = {
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
        case actionTypes.RESET_POINT_SCORE:
            newState.points = 0;
        // lives
        case actionTypes.ADD_PLAYER_LIVES:
            newState.lives += action.payload;
        case actionTypes.REMOVE_PLAYER_LIFE:
            newState.lives -= action.payload;
        case actionTypes.RESET_PLAYER_LIVES:
            newState.lives = 4;
        // coins
        case actionTypes.ADD_COINS:
            newState.coins += action.payload;
        case actionTypes.RESET_COINS:
            newState.coins = 0;
        // level timing
        case actionTypes.MARK_LEVEL_START_TIME:
            newState.levelTimer = Date.now();
        case actionTypes.RESET_LEVEL_TIMER:
            newState.levelTimer = 400;
        // entire score board
        case actionTypes.RESET_ENTIRE_SCOREBOARD:
            return initialState;
        default:
            return newState;
    }
}