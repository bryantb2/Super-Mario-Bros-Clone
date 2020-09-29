import {
  baseUnitSize,
  gameGrid,
  physicsData,
  playerMovement,
} from './gameGlobals'

export const guidGenerator = () =>
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16),
  )

// format game score with leading zeros if necessary
export const formatScore = (score) => {
  const stringedScore = score.toString()
  const leadingZeros = 6 - stringedScore.length
  let formattedScore
  // check if lead zeros must be added
  if (leadingZeros > 0) {
    // format string with lead zeros (fill/reduce an array, then concat actual value to back)
    formattedScore = Array(leadingZeros)
      .fill('0')
      .reduce((zeros, currentVal) => zeros + currentVal)
    formattedScore += stringedScore
  }
  return formattedScore
}

// retrieve array position of tile by pixel location
export const findTilePositionByPixel = (xPos, yPos) => ({
  x: Math.floor(Math.floor(xPos < 0 ? 0 : xPos) / baseUnitSize().WIDTH),
  y: Math.floor(Math.floor(yPos < 0 ? 0 : yPos) / baseUnitSize().HEIGHT),
})

// retrieve x / y pixel positions via a column/row index
export const findPixelPositionByTile = (columnIndex, rowIndex) => {
  const { WIDTH, HEIGHT } = baseUnitSize()
  // width is measure from LEFT edge
  // height is measured from top edge
  return {
    x: columnIndex * WIDTH,
    y: rowIndex * HEIGHT,
  }
}

// calculate final velocity
export const calcVelocityByTime = (
  velocityInitial,
  secondsSinceStart,
  acceleration,
) => velocityInitial + secondsSinceStart * acceleration

export const calcVelocityByDisplacement = (
  velocityInitial,
  acceleration,
  displacement,
) => Math.sqrt(Math.pow(velocityInitial, 2) + 2 * acceleration * displacement)

// velocity checkers
export const isAtWalkingVelocity = (horizontalVelocity) =>
  horizontalVelocity > 0 && horizontalVelocity <= physicsData.MAX_WALK_VELOCITY
export const isAtSprintingVelocity = (horizontalVelocity) =>
  horizontalVelocity > physicsData.MAX_WALK_VELOCITY &&
  horizontalVelocity <= physicsData.MAX_SPRINT_VELOCITY
export const getMaxXVelocity = (movementType) => {
  const { WALK, SPRINT } = playerMovement
  switch (movementType) {
    case SPRINT:
      return physicsData.MAX_SPRINT_VELOCITY
    case WALK:
      return physicsData.MAX_WALK_VELOCITY
    default:
      return 0
  }
}
export const getMaxYVelocity = (
  movementType,
  touchingFloor,
  verticalVelocity,
) => {
  const { JUMP } = playerMovement
  // return zero if jump is not active and there is not vertical velocity
  if (movementType !== JUMP && verticalVelocity === 0) return 0
  if (verticalVelocity <= 0 && !touchingFloor)
    return physicsData.MAX_GRAVITY_VELOCITY
  else if (verticalVelocity > 0) return physicsData.MAX_JUMP_VELOCITY
  else return 0
}

// collision checker
export const isTouchingFloor = (collisionCoordinates) => {
  // filter collisions for floor value
  const floorCollisions = collisionCoordinates.filter(
    (collision) => collision.position === 'BOTTOM',
  )
  // check that player is touching at least one solid object
  return floorCollisions.length >= 1
}

export const getCollisionCoordinates = (
  objectWidth,
  objectHeight,
  xPos,
  yPos,
  gameGrid,
) => {
  // check each of the box model corner
  const boxModel = buildPlayerBoxModel(objectWidth, objectHeight, xPos, yPos)
  const foundCollisions = []
  // loop through box model coordinates
  for (const modelVertex of boxModel) {
    const { x, y, position } = modelVertex
    // determine which direction pixels need to be added
    let horizontalOffset = 0,
      verticalOffset = 0
    if (position === 'TOP') {
      verticalOffset = 1
    } else if (position === 'RIGHT') {
      horizontalOffset = 1
    } else if (position === 'BOTTOM') {
      verticalOffset = -1
    } else {
      horizontalOffset = -1
    }
    // get grid tile by coordinates
    const tileIndexes = findTilePositionByPixel(
      x + horizontalOffset,
      y + verticalOffset,
    )
    const gameTile = gameGrid[tileIndexes.x][tileIndexes.y]
    if (gameTile !== null && gameTile !== undefined)
      // add game tile coordinates to collision list
      foundCollisions.push({
        ...modelVertex,
        x: x + 1, // add one to both x and y because that's how the collision was detected
        y: y + 1,
      })
  }
  return foundCollisions
}

export const isAnyCollisionLethal = (collisionArr, gameGrid) =>
  mapCollisionsToTiles(collisionArr, gameGrid).find(
    (gameTile) => gameTile.isLethal,
  ) !== undefined

const buildPlayerBoxModel = (
  playerWidth,
  playerHeight,
  playerXPos,
  playerYPos,
) => {
  // build box model coordinates of player
  // note: origin point for player box is top left, so all calcs must be relative to that corner
  const top = {
    position: 'TOP',
    x: playerXPos + playerWidth / 2,
    y: playerYPos,
  }
  const right = {
    position: 'RIGHT',
    x: playerXPos + playerWidth,
    y: playerYPos + playerHeight / 2,
  }
  const bottom = {
    position: 'BOTTOM',
    x: playerXPos + playerWidth / 2,
    y: playerYPos + playerHeight,
  }
  const left = {
    position: 'LEFT',
    x: playerXPos,
    y: playerYPos + playerHeight / 2,
  }
  return [top, right, bottom, left]
}

const mapCollisionsToTiles = (collisionArr, gameGrid) =>
  collisionArr.map((collision) => {
    const { x, y } = collision
    // get grid tile by coordinates
    const tileIndexes = findTilePositionByPixel(x, y)
    return gameGrid[tileIndexes.x][tileIndexes.y]
  })

// player controls
export const convertKeyToAction = (key) => {
  // converts any directional enhancers to player action constants
  switch (key) {
    case playerMovement.RUN_KEY:
      return playerMovement.SPRINT
    case playerMovement.JUMP_KEY:
      return playerMovement.JUMP
    case playerMovement.DOWN_KEY:
      return playerMovement.CROUCH
    default:
      return playerMovement.STAND
  }
}
export const isDirectionKey = (pressedKey) =>
  [playerMovement.LEFT_KEY, playerMovement.RIGHT_KEY].includes(pressedKey)
export const isDirectionalEnhancer = (pressedKey) =>
  [
    playerMovement.DOWN_KEY,
    playerMovement.RUN_KEY,
    playerMovement.JUMP_KEY,
  ].includes(pressedKey)
