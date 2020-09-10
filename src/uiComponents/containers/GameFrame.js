import React from 'react';
import ScoreBoard from "./ScoreBoard";
import {
    FrameContent,
    FrameContainer
} from "../elements";
import { LevelOverview } from '../components';

export default (props) => (
    <FrameContainer>
        <FrameContent>
            <ScoreBoard />
            <LevelOverview />
        </FrameContent>
        {props.children}
    </FrameContainer>
);