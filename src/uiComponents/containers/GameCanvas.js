import React, { useEffect, useState } from 'react';
import {
    CanvasBackground,
    AnimatedMaterial,
    AnimatedPlayer
} from "../components";
import { Layer } from 'react-konva';
import { useSelector, useDispatch } from "react-redux";
import {
    findPixelPositionByTile,
    baseUnitSize,
    playerSize,
    playerAnimation,
    playerMovement,
    renderingData
} from "../../gameConfig";
import { setPlayerPosition } from "../../boilerplate/actions";

export default props => {
    const dispatch = useDispatch();
    const playerData = useSelector(state => state.player);
    const loadedLevel = useSelector(state => state.loadedLevel);
    const {
        size,
        position: {
            x,
            y,
            movementType,
            horizontalVelocity,
            verticalVelocity,
            yMoveStartTime,
            xMoveStartTime
        },
        currentUpgrade
    } = playerData;

    // get player height / width AND animation values
    const { width, height } = playerSize.find(playerSize => playerSize.id === size);
    const playerAnimationData = playerAnimation.find(animationData => animationData.playerId === size);

    const moveRight = () => {
        // calculate x position
        // set movement type
        console.log('move right');
    };
    const moveLeft = () => {
        console.log('move left');
    };
    const moveDown = () => {
        console.log('move down');
    };
    const sprint = () => {
        console.log('sprint');
    };
    const jump = () => {
        console.log('jump');
    };

    const isDirectionKey = (pressedKey) =>
        [playerMovement.DOWN_KEY, playerMovement.LEFT_KEY, playerMovement.RIGHT_KEY].includes(pressedKey);

    // event handler
    const handleMove = handleType => e => {
        // determine how to handle the input
        const pressedKey = e.key.toUpperCase();
        if (isDirectionKey(pressedKey)) {
            if (handleType === 'begin')
                // set direction in state
                setMoveDirection(pressedKey);
            else {
                // cancel movement direction
                if (moveDirection === pressedKey)
                    setMoveDirection(null);
            }
        }
    };

    // executes when movement changes
    useEffect(() => {
        switch (e.key.toUpperCase()) {
            case playerMovement.DOWN_KEY:
                moveDown();
            case playerMovement.LEFT_KEY:
                moveLeft();
            case playerMovement.RIGHT_KEY:
                moveRight();
            case playerMovement.RUN_KEY:
                sprint();
            case playerMovement.JUMP_KEY:
                jump();
            default:
                return null;
        }
    }, [moveDirections])

    // executes on mount
    useEffect(() => {
        // set keyboard events
        window.addEventListener('keydown', handleMove('begin'));
        window.addEventListener('keyup', handleMove('end'));

        // cleanup when un-mounting
        return () => {
            window.removeEventListener('keydown', handleMove('begin'));
            window.removeEventListener('keyup', handleMove('end'));
        }
    }, []);

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
                <AnimatedPlayer
                    width={width * baseUnitSize().WIDTH}
                    height={height * baseUnitSize().HEIGHT}
                    x={x}
                    y={y}
                    playerMovement={movementType}
                    animationData={playerAnimationData}
                />
            </Layer>
        </CanvasBackground>
    );
};