import React from 'react';
import {
    GameScore,
    GameTime,
    CoinCounter,
    CurrentLevel
} from "../components";
import { ScoreBoardContainer } from "../elements";

export default (props) => (
    <ScoreBoardContainer style={{...props.style}}>
        <GameScore gameScore={props.gameScore} />
        <CoinCounter coinCount={props.coinCount}/>
        <CurrentLevel
            worldNumber={props.worldNumber}
            levelNumber={props.levelNumber}
        />
        <GameTime gameTime={props.gameTime} />
    </ScoreBoardContainer>
);