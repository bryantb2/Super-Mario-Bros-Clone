import React from 'react'
import { MarioIcon, OverviewHeader, LivesContainer } from '../elements'

export const NextWorld = (props) => (
  <OverviewHeader>
    World {props.worldNumber}-{props.levelNumber}
  </OverviewHeader>
)

export const PlayerLives = (props) => (
  <LivesContainer>
    <MarioIcon style={{ marginRight: '1rem' }} />{' '}
    <span style={{ marginRight: '1rem' }}>X</span> {props.playerLives}
  </LivesContainer>
)
