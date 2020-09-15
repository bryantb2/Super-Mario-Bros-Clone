import React, { useEffect, useState } from 'react';
import { Image, Text, Stage } from 'react-konva';
import useImage from "use-image";
import { animationTypes } from "../../gameConfig";

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

/*export const GameImage = props => {
    // destructure props
    const { x, y, src: { baseMaterial, animations }, width, height } = props;
    // build initial image and image state
    const [rawImage, setImage] = useState({
        material: baseMaterial, materialIndex: 0
    });
    //const [domImage, status] = useImage(rawImage === undefined ? baseMaterial : rawImage.material);


    useEffect(() => {
        let animationTimer;
        // wait to execute until current image has loaded
        //if (status === 'loaded') {
            // get base animation data by animation type
            const baseAnimation = animations.find(animData => animData.type === animationTypes.BASE_ANIMATION);
            if (baseAnimation !== undefined && baseAnimation.imageFrames.length >= 2) {
                // create timer for base animation
                animationTimer = setInterval(() => {
                    // set new material source and index
                    const newMaterial = {...rawImage};
                    if (newMaterial.materialIndex >= baseAnimation.imageFrames.length - 1) {
                        // set to zero because it reached the end of the animation frame
                        newMaterial.materialIndex = 0;
                    } else {
                        // go to new animation frame
                        newMaterial.materialIndex += 1;
                    }
                    // get raw material based on index
                    newMaterial.materialIndex = baseAnimation[newMaterial.materialIndex];
                    // set state of image
                    setImage(newMaterial);
                }, baseAnimation.cycleTime);
            } else {
                // set base material if no base animation data exists
                setImage(baseAnimation.baseMaterial);
            }
        //}
        return () => clearInterval(animationTimer);
    //}, [status]);
    }, []);

    //if (status !== 'loaded')
       // console.log('dom image value has changed');

    // generate canvas element
    // image={status === 'loaded' ? domImage : null}
    return (
        <Image
            x={x}
            y={y}
            width={width}
            height={height}
            image={useImage(rawImage === undefined ? null : rawImage.material)[0]}
        />
    );
};*/

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

const GameImage = props => {
    // build out dom image
    const { x, y, src, width, height } = props;

    // build image
    const img = document.createElement('img');
    img.src = src;

    // generate canvas element
    return (
        <Image
            x={x}
            y={y}
            width={width}
            height={height}
            image={img}
        />
    );
};

export const GameText = props => (
    <Text
        x={props.x}
        y={props.y}
        text={props.text}
    />
);
