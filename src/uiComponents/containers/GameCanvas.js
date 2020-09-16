import React, { useEffect } from 'react';
import {
    CanvasBackground,
    AnimatedMaterial,
    AnimatedPlayer
} from "../components";
import { Layer } from 'react-konva';
import { useSelector, useDispatch } from "react-redux";
import { findPixelPositionByTile, baseUnitSize, playerSize, playerAnimation } from "../../gameConfig";

export default props => {
    const dispatch = useDispatch();
    const playerData = useSelector(state => state.player);
    const loadedLevel = useSelector(state => state.loadedLevel);
    const { size, position, currentUpgrade } = playerData;

    // get player height / width values
    // get player animation values
    const { width, height } = playerSize.find(playerSize => playerSize.id === size);
    const playerAnimationData = playerAnimation.find(animationData => animationData.playerId === size);

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
                                        );
                                    }
                                }
                            ).filter(tile => tile !== undefined & tile !== null)
                        ).flatMap(column => [...column])
                }
            </Layer>
            <AnimatedPlayer
                x={width}
                y={height}
                width={position.x}
                height={position.y}
                playerMovement={}
                animationData={playerAnimationData}
            />
        </CanvasBackground>
    );
};