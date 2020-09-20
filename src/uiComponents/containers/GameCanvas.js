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
    renderingData,
    isAtSprintingVelocity,
    isAtWalkingVelocity,
    isTouchingFloor,
    convertKeyToAction,
    isDirectionKey,
    isDirectionalEnhancer
} from "../../gameConfig";
import { setPlayerMovementDirection, setPlayerMovementType } from "../../boilerplate/actions";

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
            movementDirection,
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

    useEffect(() => {
        console.log('movement direction updated: ' + movementDirection);
    }, [movementDirection]);

    // event handler
    const handleMove = handleType => e => {
        const {
            position: {
                movementType,
                movementDirection,
                horizontalVelocity,
                verticalVelocity
            }
        } = playerData;
        /*
        - only one direction can be applied at one time
        - only one movement type can be applied at one time
        - releasing a directional results in a null move
        - releasing an movement type results in the following:
            - if jump was released, set to walk, sprint, or crouch
            - if sprint was released, set to walk
            - otherwise set to stand
         */
        // determine how to handle the input
        const pressedKey = e.key.toUpperCase();
        if (isDirectionKey(pressedKey)) {
            // only if begin and pressed key is not the current one
            if (handleType === 'begin' && pressedKey !== movementDirection) {
                // set direction and initial movement
                dispatch(setPlayerMovementDirection(pressedKey));
                dispatch(setPlayerMovementType(playerMovement.WALK));
            } else if (handleType === 'end' && movementDirection === pressedKey) {
                // cancel movement direction (only if the current key in redux is the released key)
                // cancel movement type as well
                dispatch(setPlayerMovementDirection(null));
                dispatch(setPlayerMovementType(playerMovement.STAND));
            }
        } else if (isDirectionalEnhancer(pressedKey)) {
            const convertedAction = convertKeyToAction(pressedKey);
            // only if begin and pressed key is not the current one
            if (handleType === 'begin' && movementType !== convertedAction) {
                // set movement action, or block movement if a jump is in progress
                if (movementType !== playerMovement.JUMP && movementDirection != null)
                    dispatch(setPlayerMovementType(convertedAction));
                // only dispatch jump or crouch movement if player was already touching floor
                else if ((convertedAction === playerMovement.JUMP && isTouchingFloor())
                          || convertedAction === playerMovement.CROUCH)
                    dispatch(setPlayerMovementType(convertedAction));
            } else if (handleType === 'end' && movementType === convertedAction) {
                // only if end and released key is one in redux
                if (convertedAction === playerMovement.SPRINT && movementDirection !== null) {
                    // set to walk since directional is still applied and sprint key was released
                    dispatch(setPlayerMovementType(playerMovement.WALK));
                } else if (convertedAction === playerMovement.JUMP && !isTouchingFloor()) {
                    // only set sprint/walk values if the jump has concluded
                    if (isAtWalkingVelocity(horizontalVelocity))
                        dispatch(setPlayerMovementType(playerMovement.WALK));
                    else if (isAtSprintingVelocity(horizontalVelocity) && movementDirection !== null)
                        dispatch(setPlayerMovementType(playerMovement.SPRINT));
                } else if (convertedAction === playerMovement.CROUCH) {
                    // a player CANNOT move when crouching, so it defaults back to standing
                    dispatch(setPlayerMovementType(playerMovement.STAND));
                }
            }
        }
    };

    /*useEffect(() => {
        // todo: handle jump ends, physics calculations, ect.
        const movementTimer = setInterval(() => {
            // check horizontal direction

        },);
        return () => clearInterval(movementTimer);
    }, [movementType, movementDirection]);*/

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
                    x={x + horizontalVelocity}
                    y={y + verticalVelocity}
                    playerMovement={movementType}
                    animationData={playerAnimationData}
                />
            </Layer>
        </CanvasBackground>
    );
};