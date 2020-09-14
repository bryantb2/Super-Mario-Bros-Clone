import React, { useEffect } from 'react';
import {
    CanvasBackground,
    GameImage,
    GameText
} from "../components";
import { Layer } from 'react-konva';
import { useSelector, useDispatch} from "react-redux";

export default props => {
    const dispatch = useDispatch();
    const playerData = useSelector(state => state.player);
    const loadedLevel = useSelector(state => state.loadedLevel);

    // executed on mount
    useEffect(() => {
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
        >
            <Layer>
                <GameText
                    text={'200 points'}
                />
            </Layer>
        </CanvasBackground>
    );
};