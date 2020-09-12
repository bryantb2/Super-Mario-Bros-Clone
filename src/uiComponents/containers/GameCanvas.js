import React, { useEffect } from 'react';
import {
    CanvasBackground,
    GameImage,
    GameText
} from "../components";
import { Layer } from 'react-konva';
import { useSelector, useDispatch} from "react-redux";
import { loadLevelData, resetScoreboard, resetAllPlayerData } from "../../boilerplate/actions";
import { worldAndLevelIDs } from "../../gameConfig";

export default props => {
    const dispatch = useDispatch();
    const playerData = useSelector(state => state.player);
    const loadedLevel = useSelector(state => state.loadedLevel);

    // executed on mount
    useEffect(() => {
        // set level data (always starts ata 1-1
        // reset scoreboard
        // reset all player data
        dispatch(loadLevelData(worldAndLevelIDs.WORLD_1, worldAndLevelIDs.LEVEL_1));
        dispatch(resetScoreboard());
        dispatch(resetAllPlayerData());

        // setup game loop
        const gameLoop = setInterval(() => {
            // todo
            // this loop body will be used to move entities
        }, 41.6);

        // cleanup on unmount
        return () => {
            clearInterval(gameLoop);
        }
    }, []);

    return (
        <CanvasBackground
            imageTranslation={10}
            image={loadedLevel.background}
            width={window.innerWidth}
            height={window.innerHeight}
        >
            <Layer>
                <GameText
                    text={'200 points'}
                />
            </Layer>
        </CanvasBackground>
    );
};