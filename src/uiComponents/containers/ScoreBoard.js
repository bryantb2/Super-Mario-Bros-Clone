import React from 'react'
import { useSelector } from 'react-redux'
import { GameScore, GameTime, CoinCounter, CurrentLevel } from '../components'
import { Scoreboard } from '../elements'

export default (props) => {
  // fetch redux data
  const scoreboard = useSelector((state) => state.scoreboard)
  const loadedLevel = useSelector((state) => state.loadedLevel)
  const { points, coins, levelTimer } = scoreboard
  const { worldId, levelId } = loadedLevel

  return (
    <Scoreboard style={{ ...props.style }}>
      <GameScore gameScore={points} />
      <CoinCounter coinCount={coins} />
      <CurrentLevel worldNumber={worldId} levelNumber={levelId} />
      <GameTime gameTime={levelTimer} />
    </Scoreboard>
  )
}
