import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTopScore } from '../../boilerplate/actions'
import ScoreBoard from './ScoreBoard'
import { FrameContent, Frame } from '../elements'

export default (props) => {
  const dispatch = useDispatch()

  // executes on mount
  useEffect(() => {
    // fetch top score
    dispatch(fetchTopScore())
  }, [])

  return (
    <Frame>
      <FrameContent>
        <ScoreBoard />
      </FrameContent>
      {props.children}
    </Frame>
  )
}
