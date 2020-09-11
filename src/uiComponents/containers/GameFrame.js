import React from 'react';
import ScoreBoard from "./ScoreBoard";
import {
    FrameContent,
    Frame
} from "../elements";
import { LevelOverview } from '../components';

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
            <LevelOverview />
        </FrameContent>
        {props.children}
    </Frame>
);