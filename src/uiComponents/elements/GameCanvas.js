import React from 'react'
import Styled from 'styled-components'
import { Image, Text } from 'react-konva'

export const CanvasPageContainer = Styled.div`
    height: 100%;
    width: 100%;
    background-color: transparent;
`

export const GameImage = (props) => {
  // build out dom image
  const { x, y, src, width, height } = props

  // build image
  const img = document.createElement('img')
  img.src = src

  // generate canvas element
  return <Image x={x} y={y} width={width} height={height} image={img} />
}

export const GameText = (props) => (
  <Text x={props.x} y={props.y} text={props.text} />
)
