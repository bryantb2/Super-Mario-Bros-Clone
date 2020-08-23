// redux types
const scoreboardTypes = {
    // scoreboard actions
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
    MARK_LEVEL_START_TIME: 'MARK_LEVEL_START_TIME',
    RESET_LEVEL_TIMER: 'RESET_LEVEL_TIMER'
};

// merged type object
export default {...scoreboardTypes};