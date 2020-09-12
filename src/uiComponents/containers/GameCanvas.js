import React from 'react';
import {
    CanvasBackground,
    GameImage,
    GameText
} from "../components";
import { Layer } from 'react-konva';
import Background from '../../assets/menu/blank.png';

export default props => {


    return (
        <CanvasBackground
            imageTranslation={0}
            image={Background}
            width={window.innerWidth}
            height={window.innerHeight}
        >
            <Layer>
                <GameText
                    text={'200 points'}
                />
            </Layer>
        </CanvasBackground>
    );
};