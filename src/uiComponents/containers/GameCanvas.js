import React, { useEffect, useRef } from 'react'
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
  getCollisionCoordinates,
  isAnyCollisionLethal,
  physicsData,
  calcVelocityByDisplacement,
  getMaxYVelocity,
  getMaxXVelocity,
  getXAcceleration,
  getYAcceleration,
  calcVelocityByTime,
} from '../../gameConfig'
import {
  setPlayerHorizontalVelocity,
  setPlayerMovementDirection,
  setPlayerMovementType,
  setPlayerPosition,
  setPlayerVerticalVelocity,
} from '../../boilerplate/actions'

import { GameText } from '../elements'

export default (props) => {
  const dispatch = useDispatch()
  const levelData = useSelector((state) => state.loadedLevel)
  const playerData = useSelector((state) => state.player)

  // create ref to create prevProps-like behavior
  const prevPositionRef = useRef(playerData.position)

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
      //yMoveStartTime,
      //xMoveStartTime,
      moveEnhancerStartTime,
    },
    currentUpgrade,
  } = playerData
  const { gameMap, background } = levelData

  // player height/width, position, and animation values
  const { JUMP, WALK, STAND, CROUCH, SPRINT } = playerMovement
  const { WIDTH: baseUnitWidth, HEIGHT: baseUnitHeight } = baseUnitSize()
  const playerAnimationData =
    playerAnimation.find((animationData) => animationData.playerId === size) ||
    playerAnimation[0]
  const playerDimensions =
    playerSize.find((sizeData) => sizeData.id === size) || playerSize[0]
  const playerWidth = playerDimensions.width * baseUnitWidth
  const playerHeight = playerDimensions.height * baseUnitHeight
  //const playerXPos = x + horizontalVelocity
  //const playerYPos = y + verticalVelocity
  const currentCollisions =
    gameMap === null
      ? []
      : getCollisionCoordinates(playerWidth, playerHeight, x, y, gameMap)

  const handleMove = (e, handleType) => {
    /*
      - Directionals
        - only one direction can be applied at one time
        - applying an initial directional results in walk movement ALSO being applied
        - releasing a directional results in a null move
      - Movement Types
        - only one movement type can be applied at one time
        - releasing an movement type results in the following:
            - if jump was released, set to walk or sprint
            - if sprint was released, set to walk
            - otherwise set to stand
      - Misc
        - jumps cannot be interrupted by other movement types unless:
          - player is touching floor
        */
    const inputStart = 'begin'
    const inputEnd = 'end'
    const pressedKey = e.key.toUpperCase()
    if (isDirectionKey(pressedKey)) {
      // set direction and movement if "begin" event AND pressed direction is not already in state
      if (handleType === inputStart && movementDirection !== pressedKey) {
        // set direction and initial movement
        dispatch(setPlayerMovementDirection(pressedKey))
        if (movementType !== JUMP) dispatch(setPlayerMovementType(WALK))
      } else if (handleType === inputEnd && movementDirection === pressedKey) {
        // cancel directional
        dispatch(setPlayerMovementDirection(null))
        if (movementType !== JUMP) dispatch(setPlayerMovementType(STAND))
      }
    } else if (isDirectionalEnhancer(pressedKey)) {
      const keyEventAction = convertKeyToAction(pressedKey)
      const touchingFloor = isTouchingFloor(currentCollisions)
      if (handleType === inputStart && movementType !== keyEventAction) {
        // set movement action, or block movement if a jump is in progress
        if (movementType !== JUMP && movementDirection != null)
          dispatch(setPlayerMovementType(keyEventAction))
        // only dispatch jump or crouch movement if player was already touching floor
        else if (
          (keyEventAction === JUMP || keyEventAction === CROUCH) &&
          touchingFloor
        )
          dispatch(setPlayerMovementType(keyEventAction))
      } else if (handleType === inputEnd && movementType === keyEventAction) {
        // only if released key is in redux
        if (movementType === SPRINT && movementDirection !== null)
          // set to walk since directional is still applied and sprint key was released
          dispatch(setPlayerMovementType(WALK))
        /*else if (movementType === JUMP && touchingFloor) {
          // only set sprint/walk values if the jump has concluded
          if (isAtWalkingVelocity(horizontalVelocity))
            dispatch(setPlayerMovementType(WALK))
          else if (
            isAtSprintingVelocity(horizontalVelocity) &&
            movementDirection !== null
          )
            dispatch(setPlayerMovementType(SPRINT))
        }*/ else if (
          movementType === CROUCH
        ) {
          // a player CANNOT move when crouching, so it defaults back to standing
          dispatch(setPlayerMovementType(STAND))
        }
      }
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

  // executes after movement inputs change
  useEffect(() => {
    const prevPosition = { ...prevPositionRef.current }
    const currentPosition = { ...playerData.position }
    // todo: handle jump ends, physics calculations, ect.
    // check game logic, set velocity, end jumps, ect.
    const gameLoop = setInterval(() => {
      // check for lethal collisions
      if (!isAnyCollisionLethal(currentCollisions, gameMap)) {
        // check for directional movement or velocity
        if (
          (movementDirection !== null && movementType !== STAND) ||
          prevPosition.y != y ||
          prevPosition.x != x
        ) {
          // calculate collision coordinates
          const touchingFloor = isTouchingFloor(currentCollisions)
          const horizontalCollisions = currentCollisions.filter(
            (collision) =>
              collision.position === 'RIGHT' || collision.position === 'LEFT',
          )
          const verticalCollisions = currentCollisions.filter(
            (collision) => collision.position === 'TOP',
          )

          // cancel jump if touching floor
          // todo: create extra condition to check and stop a user that FALLS to the floor
          if (movementType === JUMP && touchingFloor) {
            // only set sprint/walk values if the jump has concluded
            if (isAtWalkingVelocity(horizontalVelocity))
              dispatch(setPlayerMovementType(WALK))
            else if (
              isAtSprintingVelocity(horizontalVelocity) &&
              movementDirection !== null
            )
              dispatch(setPlayerMovementType(SPRINT))
          }

          // get maximum possible velocity values
          let maxXVelocity = getMaxXVelocity(movementType),
            maxYVelocity = getMaxYVelocity(
              movementType,
              touchingFloor,
              prevPosition.verticalVelocity,
            )

          // check for velocity-impeding collisions
          let newY = y,
            newX = x,
            newXVelocity = horizontalVelocity,
            newYVelocity = verticalVelocity,
            newMoveType = movementType
          if (verticalCollisions.length >= 1 && !touchingFloor) {
            // stop player vertical velocity
            newYVelocity = 0
          } else if (horizontalCollisions.length >= 1) {
            // stop player horizontal velocity
            newXVelocity = 0
          } else {
            // determine proper acceleration values
            let xAccel = getXAcceleration(movementType),
              yAccel = getYAcceleration(prevPosition.y, y)
            // calculate next vertical and horizontal velocity
            /*newXVelocity = calcVelocityByDisplacement(
              horizontalVelocity,
              xAccel,
              x - prevPosition.x,
            )
            newYVelocity = calcVelocityByDisplacement(
              verticalVelocity,
              yAccel,
              y - prevPosition.y,
            )*/
            const secondsFromMoveStart =
              (Date.now() - moveEnhancerStartTime) / 1000
            newXVelocity = calcVelocityByTime(
              prevPosition.horizontalVelocity,
              secondsFromMoveStart,
              xAccel,
            )
            newYVelocity = calcVelocityByTime(
              prevPosition.verticalVelocity,
              secondsFromMoveStart,
              yAccel,
            )
            // limit velocities based on calculated maxes
            newXVelocity =
              newXVelocity > maxXVelocity ? maxXVelocity : newXVelocity
            newYVelocity =
              newYVelocity > maxYVelocity ? maxYVelocity : newYVelocity
          }

          // calc new x,y coordinates
          newX += newXVelocity * baseUnitWidth
          newY += newYVelocity * baseUnitHeight

          // set new values to redux store
          dispatch(setPlayerPosition(newX, newY))
          dispatch(setPlayerVerticalVelocity(newYVelocity))
          dispatch(setPlayerHorizontalVelocity(newXVelocity))

          /*console.log('Values set to redux store')
          console.log(newX)
          console.log(newY)
          console.log(newXVelocity)
          console.log(newYVelocity)*/
        }
      } else {
        // mark game over
        // todo
      }

      // set current position values to ref
      prevPositionRef.current = currentPosition
    }, renderingData.frameTimeMS)

    // cleanup effect
    return () => {
      clearInterval(gameLoop)
    }
  }, [playerData, levelData])

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
                          x={pixelPosition.x}
                          y={pixelPosition.y}
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
          x={x}
          y={y}
          playerMovement={movementType}
          animationData={playerAnimationData}
          translateX={playerWidth}
          translateY={150}
          coverImage={true}
        />
        <GameText x={0} y={793} text={'Small Player'} />
        <GameText x={0} y={760} text={'Large Player'} />
      </Layer>
    </CanvasBackground>
  )
}
