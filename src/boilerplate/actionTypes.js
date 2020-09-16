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
    // level and game data actions
    LOAD_LEVEL_DATA: 'LOAD_LEVEL_DATA',
    RESET_LEVEL_WORLD: 'RESET_LEVEL_WORLD',
    SET_LEVEL_LOAD: 'SET_LEVEL_LOAD'
};

const playerTypes = {
    // top score actions
    SET_TOP_SCORE: 'SET_TOP_SCORE',
    FETCH_TOP_SCORE: 'FETCH_TOP_SCORE',
    // position actions
    SET_PLAYER_POSITION: 'SET_PLAYER_POSITION',
    RESET_PLAYER_POSITION: 'RESET_PLAYER_POSITION',
    // player size actions
    SET_PLAYER_SIZE: 'SET_PLAYER_SIZE',
    RESET_PLAYER_SIZE: 'RESET_PLAYER_SIZE',
    // powerup actions
    SET_PLAYER_UPGRADE: 'SET_PLAYER_UPGRADE',
    RESET_PLAYER_UPGRADE: 'RESET_PLAYER_UPGRADE',
    // reset all player data
    RESET_ALL_PLAYER_DATA: 'RESET_ALL_PLAYER_DATA'
};

// merged type object
export default {...scoreboardTypes, ...levelTypes, ...playerTypes};