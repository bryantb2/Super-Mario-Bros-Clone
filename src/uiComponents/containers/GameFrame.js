import React from 'react';
import ScoreBoard from "./ScoreBoard";
import {
    FrameContent,
    Frame
} from "../elements";

export default (props) => (
    <Frame>
        <FrameContent>
            <ScoreBoard
                gameScore={0}
                coinCount={0}
                worldNumber={1}
                levelNumber={1}
                gameTime={400}
            />
        </FrameContent>
        {props.children}
    </Frame>
);