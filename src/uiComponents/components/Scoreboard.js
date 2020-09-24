import React, { useEffect, useState } from 'react'
import CoinIMG from '../../assets/items/COIN_1.png'
import { ItemContainer, CoinIcon } from '../elements'
import { formatScore } from '../../gameConfig'

const AnimatedCoin = (props) => (
  /* const { animateCoin } = props;
    const [isDarkCoin, setCoinType] = useState(false);

    useEffect(() => {
        // timer will animate the coin's background
        const timer = setInterval(() => {

        }, 1000)
    }, [animateCoin]); */

  <CoinIcon src={CoinIMG} />
)

export const GameScore = (props) => (
  <ItemContainer style={{ marginRight: '15rem' }}>
    <div>Mario</div>
    <div>{formatScore(props.gameScore)}</div>
  </ItemContainer>
)

export const CoinCounter = (props) => (
  <ItemContainer style={{ marginRight: '15rem' }}>
    <div>
      <AnimatedCoin /> X {props.coinCount}
    </div>
  </ItemContainer>
)

export const CurrentLevel = (props) => (
  <ItemContainer style={{ marginRight: '15rem' }}>
    <div>World</div>
    <div>
      {props.worldNumber} - {props.levelNumber}
    </div>
  </ItemContainer>
)

export const GameTime = (props) => (
  <ItemContainer>
    <div>Time</div>
    <div>{props.gameTime}</div>
  </ItemContainer>
)
