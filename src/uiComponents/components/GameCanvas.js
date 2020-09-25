import React, { useEffect, useState } from 'react'
import { Layer, Stage } from 'react-konva'
import { animationTypes } from '../../gameConfig'
import { GameImage } from '../elements'

export const CanvasBackground = (props) => {
  const [winHeight, setHeight] = useState(window.innerHeight)
  const [winWidth, setWidth] = useState(window.innerWidth)

  const setStageDimensions = () => {
    // set height and width
    setHeight(window.innerHeight)
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    // add listener to window to re-adjust width and height
    window.addEventListener('resize', setStageDimensions)
    return () => window.removeEventListener('resize', setStageDimensions)
  }, [])

  return (
    <Stage
      style={{
        backgroundImage: `url(${props.image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: `bottom left -${props.imageTranslation}px`,
      }}
      height={winHeight}
      width={winWidth}
    >
      {props.children}
    </Stage>
  )
}

export const AnimatedMaterial = (props) => {
  // destructure props
  const {
    x,
    y,
    animationData: { baseMaterial, animations },
    width,
    height,
  } = props
  // build initial image and image state
  const [rawImage, setImage] = useState(baseMaterial)

  useEffect(() => {
    // get base animation data by animation type
    const baseAnimation = animations.find(
      (animData) => animData.type === animationTypes.BASE_ANIMATION,
    )
    if (baseAnimation !== undefined && baseAnimation.imageFrames.length >= 2) {
      const { imageFrames, cycleTime } = baseAnimation
      // create timer for base animation
      setTimeout(() => {
        // get index of current material in state
        const materialIndex = imageFrames.findIndex(
          (material) => material === rawImage,
        )
        // check if next frame or first frame should be used
        const nextMaterial =
          materialIndex >= imageFrames.length - 1
            ? imageFrames[0]
            : imageFrames[materialIndex + 1]
        // set state of image
        setImage(nextMaterial)
      }, cycleTime)
    }
  }, [rawImage])

  // generate canvas element
  return <GameImage x={x} y={y} width={width} height={height} src={rawImage} />
}

export const AnimatedPlayer = (props) => {
  // destructure props
  const {
    x,
    y,
    animationData: { restingSprite, animations },
    width,
    height,
    playerMovement,
    translateX,
    translateY,
    coverImage
  } = props
  // build initial image and image state
  const [animationFrame, setNextFrame] = useState(restingSprite)

  useEffect(() => {
    // find animation data by movement type
    const movementAnimation = animations.find(
      (animation) => animation.type === playerMovement,
    )
    if (
      movementAnimation !== undefined &&
      movementAnimation.imageFrames !== 0
    ) {
      const { imageFrames, cycleTime } = movementAnimation
      // set delayed animation frame
      setTimeout(() => {
        let nextFrame
        // check if current frame is in found data (if it is not, that means the movement type changed)
        const newAnimation = imageFrames.includes(animationFrame)
        if (!newAnimation) {
          // set first frame of new animation
          nextFrame = imageFrames[0]
        } else {
          // get index of current frame
          const frameIndex = imageFrames.findIndex(
            (frame) => frame === animationFrame,
          )
          // check if next frame or first frame should be used
          nextFrame =
            frameIndex >= imageFrames.length - 1
              ? imageFrames[0]
              : imageFrames[frameIndex + 1]
        }
        setNextFrame(nextFrame)
      }, cycleTime)
    } else if (animationFrame !== restingSprite) {
      // set to default image if animation data was not found
      setNextFrame(restingSprite)
    }
  }, [animationFrame, playerMovement])

  return (
    <GameImage
        coverImage={coverImage}
        x={x}
        y={y}
        width={width}
        height={height}
        src={animationFrame}
        translateX={translateX}
        translateY={translateY}
    />
  )
}
