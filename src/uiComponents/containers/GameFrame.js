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
            <ScoreBoard />
            <LevelOverview />
        </FrameContent>
        {props.children}
    </Frame>
);