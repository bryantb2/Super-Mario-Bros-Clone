import actionTypes from '../actionTypes'

// position actions
export const setPlayerPosition = (xPos, yPos) => (dispatch) =>
  dispatch({
    type: actionTypes.SET_PLAYER_POSITION,
    payload: { x: xPos, y: yPos },
  })

export const setPlayerMovementType = (movementType) => (dispatch) =>
  dispatch({
    type: actionTypes.SET_MOVEMENT_TYPE,
    payload: movementType,
  })

export const setPlayerMovementDirection = (movementDirection) => (dispatch) =>
  dispatch({
    type: actionTypes.SET_MOVEMENT_DIRECTION,
    payload: movementDirection,
  })

export const setPlayerVerticalVelocity = (verticalVelocity) => (dispatch) =>
  dispatch({
    type: actionTypes.SET_VERTICAL_VELOCITY,
    payload: verticalVelocity,
  })

export const setPlayerHorizontalVelocity = (horizontalVelocity) => (dispatch) =>
  dispatch({
    type: actionTypes.SET_HORIZONTAL_VELOCITY,
    payload: horizontalVelocity,
  })

export const setPlayerYMoveStartTime = (startTime) => (dispatch) =>
  dispatch({
    type: actionTypes.SET_Y_MOVE_START_TIME,
    payload: startTime,
  })

export const setPlayerXMoveStartTime = (startTime) => (dispatch) =>
  dispatch({
    type: actionTypes.SET_X_MOVE_START_TIME,
    payload: startTime,
  })

export const resetPlayerPosition = () => (dispatch) =>
  dispatch({ type: actionTypes.RESET_PLAYER_POSITION })

// size actions
export const setPlayerSize = (size) => (dispatch) =>
  dispatch({
    type: actionTypes.SET_PLAYER_SIZE,
    payload: size,
  })

export const resetPlayerSize = (size) => (dispatch) =>
  dispatch({ type: actionTypes.RESET_PLAYER_SIZE })

// upgrade actions
export const setPlayerUpgrade = (upgradeItem) => (dispatch) =>
  dispatch({
    type: actionTypes.SET_PLAYER_UPGRADE,
    payload: upgradeItem,
  })

export const resetPlayerUpgrade = () => (dispatch) =>
  dispatch({ type: actionTypes.RESET_PLAYER_UPGRADE })

// nuclear option
export const resetAllPlayerData = () => (dispatch) =>
  dispatch({ type: actionTypes.RESET_ALL_PLAYER_DATA })
