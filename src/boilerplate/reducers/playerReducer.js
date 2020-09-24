import actionTypes from '../actionTypes'
import {
  playerSize,
  baseUnitSize,
  gameGrid,
  playerMovement,
  floorHeight,
} from '../../gameConfig'

const initialSize = playerSize[1].id;

const initialState = {
  size: initialSize,
  position: {
    x: 0,
    y: floorHeight
        .find(height => height.size === initialSize).floorHeight,
    movementType: playerMovement.STAND,
    movementDirection: null,
    horizontalVelocity: 0,
    verticalVelocity: 0,
    yMoveStartTime: null, // controls vertical acceleration of movements
    xMoveStartTime: null, // controls horizontal acceleration of movements
  },
  currentUpgrade: null,
}

export default (state = initialState, action) => {
  const newState = { ...state }
  switch (action.type) {
    // position
    case actionTypes.SET_PLAYER_POSITION:
      newState.position.x = action.payload.x
      newState.position.y = action.payload.y
      return newState
    case actionTypes.SET_MOVEMENT_TYPE:
      newState.position.movementType = action.payload
      return newState
    case actionTypes.SET_MOVEMENT_DIRECTION:
      newState.position.movementDirection = action.payload
      return newState
    case actionTypes.SET_VERTICAL_VELOCITY:
      newState.position.verticalVelocity = action.payload
      return newState
    case actionTypes.SET_HORIZONTAL_VELOCITY:
      newState.position.horizontalVelocity = action.payload
      return newState
    case actionTypes.SET_Y_MOVE_START_TIME:
      newState.position.yMoveStartTime = action.payload
      return newState
    case actionTypes.SET_X_MOVE_START_TIME:
      newState.position.xMoveStartTime = action.payload
      return newState
    case actionTypes.RESET_PLAYER_POSITION:
      newState.position = initialState.position
      return newState
    // size
    case actionTypes.SET_PLAYER_SIZE:
      newState.size = action.payload
      return newState
    case actionTypes.RESET_PLAYER_SIZE:
      newState.size = initialState.size
      return newState
    // upgrade
    case actionTypes.SET_PLAYER_UPGRADE:
      newState.currentUpgrade = action.payload
      return newState
    case actionTypes.RESET_PLAYER_UPGRADE:
      newState.currentUpgrade = initialState.currentUpgrade
      return newState
    // reset all data
    case actionTypes.RESET_ALL_PLAYER_DATA:
      return initialState
    default:
      return newState
  }
}
