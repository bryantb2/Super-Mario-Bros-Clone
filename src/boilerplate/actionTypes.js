// redux types
const scoreboardTypes = {
    // points actions
    ADD_POINT_SCORE: 'ADD_POINT_SCORE',
    RESET_POINT_SCORE: 'RESET_POINT_SCORE',
    // life actions
    ADD_PLAYER_LIVES: 'ADD_PLAYER_LIVES',
    REMOVE_PLAYER_LIFE: 'REMOVE_PLAYER_LIFE',
    RESET_PLAYER_LIVES: 'RESET_PLAYER_LIVES',
    // coin actions
    ADD_COINS: 'ADD_COINS',
    RESET_COINS: 'WIPE_COINS',
    // level timing actions
    START_LEVEL_TIMER: 'START_LEVEL_TIMER',
    DECREMENT_TIMER: 'DECREMENT_TIMER',
    RESET_LEVEL_TIMER: 'RESET_LEVEL_TIMER',
    // total scoreboard action
    RESET_ENTIRE_SCOREBOARD: 'RESET_ENTIRE_SCOREBOARD'
};

const levelTypes = {
    // world actions
    SET_CURRENT_WORLD: 'SET_CURRENT_WORLD',
    SET_CURRENT_LEVEL: 'SET_CURRENT_LEVEL'
};

// merged type object
export default {...scoreboardTypes, ...levelTypes};