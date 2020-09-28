import React from 'react'
import Styled from 'styled-components'
import { Image, Text, Rect } from 'react-konva'

export const CanvasPageContainer = Styled.div`
    height: 100%;
    width: 100%;
    background-color: transparent;
`

export const GameImage = (props) => {
  // build out dom image
  const { x, y, src, width, height, translateX, translateY, coverImage } = props

  // build image
  const img = document.createElement('img')
  img.src = src

  // check and set cover scale
  let imageScale = { height: 0, width: 0 }
  if (coverImage) {
    // calculate target scaling value
    const targetWidth = width / img.width
    const targetHeight = height / img.height
    // select max scale value for fitting image to container
    imageScale = Math.max(targetWidth, targetHeight)
  }

  // generate canvas element
  return (
    <Rect
      x={x}
      y={y}
      width={width}
      height={height}
      fillPatternImage={img}
      fillPatternRepeat={'no-repeat'}
      fillPatternScaleX={coverImage === true ? imageScale : width / img.width}
      fillPatternScaleY={coverImage === true ? imageScale : height / img.height}
      fillPatternOffsetX={
        translateX !== null && translateX !== undefined ? translateX : 0
      }
      fillPatternOffsetY={
        translateY !== null && translateY !== undefined ? translateY : 0
      }
    />
  )
}

export const GameText = (props) => (
  <Text x={props.x} y={props.y} text={props.text} />
)
