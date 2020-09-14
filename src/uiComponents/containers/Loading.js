import React from 'react';
import { NextWorld, PlayerLives } from "../components";
import { LoadingContent } from "../elements";
import { useSelector } from "react-redux";

export default props => {
    // get redux data
    const scoreboard = useSelector(state => state.scoreboard);
    const loadedLevel = useSelector(state => state.loadedLevel);
    const { worldId, levelId } = loadedLevel;
    const { lives } = scoreboard;
    return (
        <LoadingContent>
            <NextWorld
                worldNumber={worldId}
                levelNumber={levelId}
            />
            <PlayerLives playerLives={lives} />
        </LoadingContent>
    );
};