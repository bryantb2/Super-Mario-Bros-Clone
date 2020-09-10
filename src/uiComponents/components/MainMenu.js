import React from 'react';
import { Link } from 'react-router-dom';
import BannerImg from '../../assets/menu/banner.png';
import SelectionImg from '../../assets/menu/modeSelector.png';
import { MenuImage, ModeCursor, ModeText, Selector } from "../elements";
import { formatScore } from "../../gameConfig";

export const MenuBanner = props => (
    <div style={{marginBottom: '2rem'}}>
      <MenuImage src={BannerImg} />
      <p style={{width: '100%', textAlign: 'right'}}>C 1985 Nintendo</p>
    </div>
);

export const SelectionItem = props => (
    <Selector>
        <ModeCursor src={SelectionImg} />
        <Link to={props.itemLink}>
            <ModeText>{props.itemText}</ModeText>
        </Link>
    </Selector>
);

export const TopScore = props => (
    <ModeText>Top - {formatScore(props.score)}</ModeText>
);