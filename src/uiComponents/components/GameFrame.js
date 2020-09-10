import React from 'react';
import {
    OverviewContainer,
    MarioIcon
} from "../elements";

export const LevelOverview = props => (
    <OverviewContainer>
        <div>World {props.worldNumber}-{props.levelNumber}</div>
        <div>
            <MarioIcon /> X {props.playerLives}
        </div>
    </OverviewContainer>
);

