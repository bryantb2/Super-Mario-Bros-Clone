import actionTypes from '../actionTypes';
import { gameLevels, generateMaterialGrid } from "../../gameConfig";

const initialState = {
    worldId: null,
    levelId: null,
    background: null,
    gameMap: null
};

export default (state = initialState, action) => {
    const newState = {...state};
    switch(action.type) {
        case actionTypes.LOAD_LEVEL_DATA:
            const { worldId, levelId } = action.payload;
            // fetch level data
            const compressedLevelData = gameLevels
                .find(world => world.worldId === worldId).worldLevels
                .find(level => level.levelId === levelId);
            newState.worldId = worldId;
            newState.levelId = levelId;
            newState.gameMap = generateMaterialGrid(compressedLevelData); // decompress data
            newState.background = compressedLevelData.background;
            return newState;
        case actionTypes.RESET_LEVEL_WORLD:
            return initialState;
        default:
            return newState;
    }
}