import React from 'react'
import { useSelector } from 'react-redux'
import { NextWorld, PlayerLives } from '../components'
import { LoadingContent } from '../elements'

export default (props) => {
  // get redux data
  const scoreboard = useSelector((state) => state.scoreboard)
  const loadedLevel = useSelector((state) => state.loadedLevel)
  const { worldId, levelId } = loadedLevel
  const { lives } = scoreboard
  return (
    <LoadingContent>
      <NextWorld worldNumber={worldId} levelNumber={levelId} />
      <PlayerLives playerLives={lives} />
    </LoadingContent>
  )
}
