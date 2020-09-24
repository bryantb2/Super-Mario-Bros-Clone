import React, { useEffect, useState, useCallback } from 'react'
import { Layer } from 'react-konva'
import { useSelector, useDispatch } from 'react-redux'
import {
  CanvasBackground,
  AnimatedMaterial,
  AnimatedPlayer,
} from '../components'
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
  isDirectionalEnhancer,
} from '../../gameConfig'
import {
  setPlayerMovementDirection,
  setPlayerMovementType,
} from '../../boilerplate/actions'

export default (props) => {
  const dispatch = useDispatch()
  const levelData = useSelector((state) => state.loadedLevel)
  const playerData = useSelector((state) => state.player)

  // breakdown state
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
      xMoveStartTime,
    },
    currentUpgrade,
  } = playerData
  const { gameMap, background } = levelData

  // player height/width, position, and animation values
  const { WIDTH: baseUnitWidth, HEIGHT: baseUnitHeight } = baseUnitSize()
  const playerAnimationData =
    playerAnimation.find((animationData) => animationData.playerId === size) ||
    playerAnimation[0]
  const playerDimensions =
    playerSize.find((sizeData) => sizeData.id === size) || playerSize[0]
  const playerWidth = playerDimensions.width * baseUnitWidth
  const playerHeight = playerDimensions.height * baseUnitHeight
  const playerXPos = x + horizontalVelocity
  const playerYPos = y + verticalVelocity

  useEffect(() => {
    // todo: handle jump ends, physics calculations, ect.
    const movementTimer = setInterval(() => {
      // check if collision is occurring
      // if ()
    }, renderingData.frameTimeMS)
    return () => clearInterval(movementTimer)
  }, [movementType, movementDirection])

  const handleMove = (e, handleType) => {
    console.log(playerMovement);
    /*
        - only one direction can be applied at one time
        - only one movement type can be applied at one time
        - releasing a directional results in a null move
        - releasing an movement type results in the following:
            - if jump was released, set to walk, sprint, or crouch
            - if sprint was released, set to walk
            - otherwise set to stand
        */
    const pressedKey = e.key.toUpperCase()
    if (isDirectionKey(pressedKey)) {
      // only if begin and pressed key is not the current one
      if (handleType === 'begin' && pressedKey !== movementDirection) {
        // set direction and initial movement
        dispatch(setPlayerMovementDirection(pressedKey))
        dispatch(setPlayerMovementType(playerMovement.WALK))
      } else if (handleType === 'end' && movementDirection === pressedKey) {
        // cancel movement and direction
        dispatch(setPlayerMovementDirection(null))
        dispatch(setPlayerMovementType(playerMovement.STAND))
      }
    } else if (isDirectionalEnhancer(pressedKey)) {
      const convertedAction = convertKeyToAction(pressedKey)
      const touchingFloor = isTouchingFloor(
        playerWidth,
        playerHeight,
        x,
        y,
        gameMap,
      )
      if (handleType === 'begin' && movementType !== convertedAction) {
        // set movement action, or block movement if a jump is in progress
        if (movementType !== playerMovement.JUMP && movementDirection != null)
          dispatch(setPlayerMovementType(convertedAction))
        // only dispatch jump or crouch movement if player was already touching floor
        else if (
          (convertedAction === playerMovement.JUMP && touchingFloor) ||
          convertedAction === playerMovement.CROUCH
        )
          dispatch(setPlayerMovementType(convertedAction))
      } /*else if (
        handleType === 'end' &&
        movementType === convertedAction
      ) {
        // only if released key is in redux
        if (
          movementType === playerMovement.SPRINT &&
          movementDirection !== null
        )
          // set to walk since directional is still applied and sprint key was released
          dispatch(setPlayerMovementType(playerMovement.WALK))
        else if (movementType === playerMovement.JUMP && touchingFloor) {
          // only set sprint/walk values if the jump has concluded
          if (isAtWalkingVelocity(horizontalVelocity))
            dispatch(setPlayerMovementType(playerMovement.WALK))
          else if (
            isAtSprintingVelocity(horizontalVelocity) &&
            movementDirection !== null
          )
            dispatch(setPlayerMovementType(playerMovement.SPRINT))
        } else if (movementType === playerMovement.CROUCH) {
          // a player CANNOT move when crouching, so it defaults back to standing
          dispatch(setPlayerMovementType(playerMovement.STAND))
        }
      }*/
    }
  }

  // executes on mount
  useEffect(() => {
    // create functions that pass in a handle type
    const beginEvent = (e) => handleMove(e, 'begin')
    const endEvent = (e) => handleMove(e, 'end')
    // set keyboard events
    window.addEventListener('keydown', beginEvent)
    window.addEventListener('keyup', endEvent)
    // cleanup when un-mounting
    return () => {
      window.removeEventListener('keydown', beginEvent)
      window.removeEventListener('keyup', endEvent)
    }
  }, [playerData, levelData])

  console.log(baseUnitHeight);

  return (
    <CanvasBackground imageTranslation={0} image={background}>
      <Layer>
        {gameMap === null
          ? null
          : [...gameMap]
              .map((column, columnIndex) =>
                column
                  .map((tile, rowIndex) => {
                    if (tile !== undefined && tile !== null) {
                      const pixelPosition = findPixelPositionByTile(
                        columnIndex,
                        rowIndex,
                      )
                      return (
                        <AnimatedMaterial
                          key={tile.instanceId}
                          x={
                            pixelPosition.x
                          }
                          y={
                            pixelPosition.y
                          }
                          width={baseUnitWidth}
                          height={baseUnitHeight}
                          animationData={tile.materialAnimation}
                        />
                      )
                    }
                  })
                  .filter((tile) => (tile !== undefined) & (tile !== null)),
              )
              .flatMap((column) => [...column])}
        <AnimatedPlayer
          width={playerWidth}
          height={playerHeight}
          x={playerXPos}
          y={playerYPos}
          playerMovement={playerData.position.movementType}
          animationData={playerAnimationData}
        />
      </Layer>
    </CanvasBackground>
  )
}
