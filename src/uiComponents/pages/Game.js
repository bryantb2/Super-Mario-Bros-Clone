import React, { useEffect } from 'react';
import { useSelector, useDispatch} from "react-redux";
import { CanvasPageContainer, LoadingPageContainer } from "../elements";
import { loadLevelData, resetAllPlayerData, resetScoreboard, setLevelLoad } from "../../boilerplate/actions";
import GameCanvas from "../containers/GameCanvas";
import LoadingContent from '../containers/Loading';
import {worldAndLevelIDs} from "../../gameConfig";

export default props => {
    // get redux data
    const dispatch = useDispatch();
    const loadedLevel = useSelector(state => state.loadedLevel);
    const { loadingLevel } = loadedLevel;

    // executed on mount
    useEffect(() => {
        // reset score, player data, and set initial level data
        if (process.env.NODE_ENV === 'development')
            dispatch(loadLevelData(worldAndLevelIDs.TEST_WORLD, worldAndLevelIDs.LEVEL_1));
        else
            dispatch(loadLevelData(worldAndLevelIDs.WORLD_1, worldAndLevelIDs.LEVEL_1));
        dispatch(resetScoreboard());
        dispatch(resetAllPlayerData());
    }, []);

    // executes when loading is true
    useEffect(() => {
        if (loadingLevel) {
            // wait for 5 seconds and then set loading to false
            setTimeout(() => {
                dispatch(setLevelLoad(false));
            }, 6000);
        }
    }, [loadingLevel]);

    return (
        <>
            {
                loadingLevel === true ?
                <LoadingPageContainer>
                    <LoadingContent />
                </LoadingPageContainer> : null
            }
            <CanvasPageContainer style={{display: `${loadingLevel === true ? 'none' : 'block'}`}}>
                <GameCanvas />
            </CanvasPageContainer>
        </>
    )
};
