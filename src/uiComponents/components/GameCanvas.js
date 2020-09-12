import React, { useEffect, useState } from 'react';
import { Image, Text, Stage } from 'react-konva';
import useImage from "use-image";

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
                backgroundPosition: `bottom right ${props.imageTranslation}`
            }}
            height={winHeight}
            width={winWidth}
        >
            {props.children}
        </Stage>
    );
};

export const GameImage = props => {
    const { x, y, src, width, height } = props;
    // build out dom image
    const [domImage] = useImage(src);
    domImage.width = width;
    domImage.height = height;
    // generate canvas element
    return (
        <Image
            x={x}
            y={y}
            image={useImage(props.src)}
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
