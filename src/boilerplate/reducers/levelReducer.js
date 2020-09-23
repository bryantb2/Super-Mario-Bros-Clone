import actionTypes from '../actionTypes';
import { gameLevels, generateMaterialGrid } from "../../gameConfig";

const initialState = {
    worldId: null,
    levelId: null,
    background: null,
    gameMap: null,
    loadingLevel: true
};

export default (state = initialState, action) => {
    const newState = {...state};
    switch(action.type) {
        // level data
        case actionTypes.LOAD_LEVEL_DATA:
            const { worldId, levelId } = action.payload;
            // fetch level data
            const compressedLevelData = gameLevels
                .find(world => world.worldId === worldId).worldLevels
                .find(level => level.levelId === levelId);
            newState.worldId = worldId;
            newState.levelId = levelId;
            newState.gameMap = generateMaterialGrid(compressedLevelData.levelData); // decompress data
            newState.background = compressedLevelData.background;
            return newState;
        // reset level
        case actionTypes.RESET_LEVEL_WORLD:
            return {...initialState};
        // set loading state
        case actionTypes.SET_LEVEL_LOAD:
            newState.loadingLevel = action.payload;
            return newState;
        default:
            return newState;
    }
}