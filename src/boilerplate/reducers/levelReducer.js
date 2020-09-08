import actionTypes from '../actionTypes';

const initialState = {
    world: null,
    level: null
};

export default (state = initialState, action) => {
    const newState = {...state};
    switch(action.type) {
        case actionTypes.SET_CURRENT_WORLD:
            newState.world = action.payload;
            return newState;
        case actionTypes.SET_CURRENT_LEVEL:
            newState.level = action.payload;
            return newState;
        case actionTypes.RESET_LEVEL_WORLD:
            newState.world = null;
            newState.level = null;
            return newState;
        default:
            return newState;
    }
}