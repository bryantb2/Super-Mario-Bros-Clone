import React from 'react';
import {
    GameScore,
    GameTime,
    CoinCounter,
    CurrentLevel
} from "../components";
import { Scoreboard } from "../elements";

export default (props) => (
    <Scoreboard style={{...props.style}}>
        <GameScore gameScore={props.gameScore} />
        <CoinCounter coinCount={props.coinCount}/>
        <CurrentLevel
            worldNumber={props.worldNumber}
            levelNumber={props.levelNumber}
        />
        <GameTime gameTime={props.gameTime} />
    </Scoreboard>
);