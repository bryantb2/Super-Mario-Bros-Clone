import React, { useEffect, useState } from 'react';
import CoinIMG from '../../assets/items/COIN_1.png';
import {
    ItemContainer,
    ScoreItem,
    CoinIcon
} from '../elements';

const AnimatedCoin = props => {
    /*const { animateCoin } = props;
    const [isDarkCoin, setCoinType] = useState(false);

    useEffect(() => {
        // timer will animate the coin's background
        const timer = setInterval(() => {

        }, 1000)
    }, [animateCoin]);*/

    return (
        <CoinIcon src={CoinIMG} />
    );
}

export const GameScore = props => {

    // format game score with leading zeros if necessary
    const formatScore = score => {
        const stringedScore = score.toString();
        const leadingZeros = 6 - stringedScore.length;
        let formattedScore;
        // check if lead zeros must be added
        if (leadingZeros > 0) {
            // format string with lead zeros (fill/reduce an array, then concat actual value to back)
            formattedScore = Array(leadingZeros).fill('0')
                .reduce((zeros, currentVal) => zeros + currentVal);
            formattedScore += stringedScore;
        }
        return formattedScore;
    }

    return (
        <ItemContainer>
            <ScoreItem>Mario</ScoreItem>
            <ScoreItem>{formatScore(props.gameScore)}</ScoreItem>
        </ItemContainer>
    );
};

export const CoinCounter = props => (
    <ItemContainer>
        <ScoreItem>
            <AnimatedCoin /> X {props.coinCount}
        </ScoreItem>
    </ItemContainer>
);

export const CurrentLevel = props => (
    <ItemContainer>
        <ScoreItem>World</ScoreItem>
        <ScoreItem>{props.worldNumber} - {props.levelNumber}</ScoreItem>
    </ItemContainer>
);

export const GameTime = props => (
    <ItemContainer>
        <ScoreItem>Time</ScoreItem>
        <ScoreItem>{props.gameTime}</ScoreItem>
    </ItemContainer>
);