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
                backgroundPosition: `bottom left -${props.imageTranslation}px`
            }}
            height={winHeight}
            width={winWidth}
        >
            {props.children}
        </Stage>
    );
};

export function GameImage(props)  {
    // build out dom image
    const { x, y, src, width, height } = props;
    const [image, status] = useImage(src);

    // executes when status changes
    useEffect(() => {
        // check status every 10ms
        const timer = setInterval(() => {
            // check if loaded
            if (status === 'loaded') {
                // set image dimensions
                image.width = '100%';
                image.height = '100%';
                // clear timer
                clearInterval(timer);
            }
        }, 10);
    }, [status]);

    // generate canvas element
    if (status === "loaded")
        return (
            <Image
                x={x}
                y={y}
                width={width}
                height={height}
                image={image}
            />
        );
    return null;
};

export const GameText = props => (
    <Text
        x={props.x}
        y={props.y}
        text={props.text}
    />
);
