import React from 'react';
import {
    Overview,
    MarioIcon
} from "../elements";

export const LevelOverview = props => (
    <Overview>
        <div>World {props.worldNumber}-{props.levelNumber}</div>
        <div>
            <MarioIcon /> X {props.playerLives}
        </div>
    </Overview>
);

