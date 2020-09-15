import React, { useEffect } from 'react';
import {
    CanvasBackground,
    AnimatedMaterial,
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
    /*useEffect(() => {
        // setup game loop
        const gameLoop = setInterval(() => {
            // todo
            // this loop body will be used to move entities
        }, 41.6);

        // cleanup on unmount
        return () => {
            clearInterval(gameLoop);
        }
    }, []);*/

    return (
        <CanvasBackground
            imageTranslation={0}
            image={loadedLevel.background}
        >
            <Layer>
                {
                    loadedLevel.gameMap === null ? null :
                        loadedLevel.gameMap.map((column, columnIndex) =>
                            column.map((tile, rowIndex) => {
                                    if (tile !== undefined && tile !== null) {
                                        const pixelPosition = findPixelPositionByTile(columnIndex, rowIndex);
                                        const { WIDTH, HEIGHT } = baseUnitSize();
                                        return (
                                            <AnimatedMaterial
                                                key={tile.instanceId}
                                                x={pixelPosition.x - WIDTH /*translate left since width is measured from right edge*/}
                                                y={pixelPosition.y - HEIGHT /*translate up since height is measured from top edge*/}
                                                width={WIDTH}
                                                height={HEIGHT}
                                                animationData={tile.materialAnimation}
                                            />
                                        )
                                    }
                                }
                            ).filter(tile => tile !== undefined & tile !== null)
                        ).flatMap(column => [...column])
                }
            </Layer>
        </CanvasBackground>
    );
};