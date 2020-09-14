import React, { useEffect } from 'react';
import {
    CanvasBackground,
    GameImage,
    GameText
} from "../components";
import { Layer } from 'react-konva';
import { useSelector, useDispatch} from "react-redux";
import { findPixelPositionByTile, baseUnitSize } from "../../gameConfig";
import testImage from '../../assets/menu/banner.png';

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

    const grid = loadedLevel.gameMap === null ? null :
        loadedLevel.gameMap.map((column, columnIndex) =>
            column.map((tile, rowIndex) => {
                    if (tile !== undefined && tile !== null) {
                        const pixelPosition = findPixelPositionByTile(columnIndex, rowIndex);
                        return (
                            <GameImage
                                key={tile.instanceId}
                                x={pixelPosition.x - baseUnitSize.WIDTH}
                                y={pixelPosition.y}
                                width={baseUnitSize.WIDTH}
                                height={baseUnitSize.HEIGHT}
                                src={tile.materialAnimation.baseMaterial}
                            />
                        )
                    }
                }
            ).filter(tile => tile !== undefined & tile !== null)
        ).flatMap(column => [...column]);


    console.log('loaded level array:');
    console.log(loadedLevel);
    console.log('reactified array: ');
    console.log(grid);

    return (
        <CanvasBackground
            imageTranslation={0}
            image={loadedLevel.background}
        >
            <Layer>
                {
                    grid
                }
            </Layer>
        </CanvasBackground>
    );
};