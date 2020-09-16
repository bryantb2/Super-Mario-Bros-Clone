import React, { useEffect, useState } from 'react';
import { Layer, Stage} from 'react-konva';
import { animationTypes } from "../../gameConfig";
import { GameImage } from "../elements";

export const CanvasBackground = props => {
    const [winHeight, setHeight] = useState(window.innerHeight);
    const [winWidth, setWidth] = useState(window.innerWidth);

    const setStageDimensions = () => {
        // set height and width
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        // add listener to window to re-adjust width and height
        window.addEventListener('resize', setStageDimensions);
        return () => window.removeEventListener('resize', setStageDimensions);
    }, []);

    return (
        <Stage
            style={{
                backgroundImage: `url(${props.image})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: `bottom left -${props.imageTranslation}px`
            }}
            height={winHeight}
            width={winWidth}
        >
            {props.children}
        </Stage>
    );
};

export const AnimatedMaterial = props => {
    // destructure props
    const { x,  y,  animationData: { baseMaterial, animations }, width, height } = props;
    // build initial image and image state
    const [rawImage, setImage] = useState(baseMaterial);

    useEffect(() => {
        // get base animation data by animation type
        const baseAnimation = animations.find(animData =>
            animData.type === animationTypes.BASE_ANIMATION);
        if (baseAnimation !== undefined && baseAnimation.imageFrames.length >= 2) {
            // create timer for base animation
            setTimeout(() => {
                // get index of current material in state
                const materialIndex = baseAnimation.imageFrames
                    .findIndex(material => material === rawImage);
                // check if next frame or first frame should be used
                const nextMaterial = materialIndex >= baseAnimation.imageFrames.length - 1
                    ? baseAnimation.imageFrames[0] : baseAnimation.imageFrames[materialIndex + 1];
                // set state of image
                setImage(nextMaterial);
            }, baseAnimation.cycleTime);
        }
    }, [rawImage]);

    // generate canvas element
    return (
        <GameImage
            x={x}
            y={y}
            width={width}
            height={height}
            src={rawImage}
        />
    );
};

export const AnimatedPlayer = props => {
    // destructure props
    const { x,  y,  animationData: { restingSprite, animations }, width, height } = props;



    return (
        <GameImage
            x={position.x}
            y={position.y}
            width={sizeObject.width}
            height={sizeObject.height}
            src={}
        />
    );
}
