import React, { useEffect } from 'react';
import { useSelector, useDispatch} from "react-redux";
import { fetchTopScore } from "../../boilerplate/actions";
import ScoreBoard from "./ScoreBoard";
import {
    FrameContent,
    Frame
} from "../elements";

export default (props) => {
    // fetch redux data
    const dispatch = useDispatch();
    const scoreboard = useSelector(state => state.scoreboard);
    const loadedLevel = useSelector(state => state.loadedLevel);

    // executes on mount
    useEffect(() => {
        // fetch top score
        dispatch(fetchTopScore());
    }, []);

    // todo add loading component in here
    return (
        <Frame>
            <FrameContent>
                <ScoreBoard
                    gameScore={scoreboard.points}
                    coinCount={scoreboard.coins}
                    worldNumber={loadedLevel.worldId === null ? 1 : loadedLevel.worldId}
                    levelNumber={loadedLevel.levelId === null ? 1 : loadedLevel.levelId}
                    levelTimer={scoreboard.levelTimer}
                />
            </FrameContent>
            {props.children}
        </Frame>
    );
};