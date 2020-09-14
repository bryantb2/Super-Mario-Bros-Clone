import React, { useEffect } from 'react';
import { useSelector, useDispatch} from "react-redux";
import { CanvasPageContainer, LoadingPageContainer } from "../elements";
import { setLevelLoad } from "../../boilerplate/actions";
import GameCanvas from "../containers/GameCanvas";
import LoadingContent from '../containers/Loading';

export default props => {
    // get redux data
    const dispatch = useDispatch();
    const loadedLevel = useSelector(state => state.loadedLevel);
    const displayLoad = loadedLevel.loadingLevel;

    // executes when loading is true
    useEffect(() => {
        if (displayLoad) {
            // wait for 5 seconds and then set loading to false
            setTimeout(() => {
                dispatch(setLevelLoad(false));
            }, 6000);
        }
    }, [loadedLevel.loadingLevel]);

    return (
        <>
            {
                displayLoad === true ?
                <LoadingPageContainer>
                    <LoadingContent />
                </LoadingPageContainer> : null
            }
            <CanvasPageContainer style={{display: `${displayLoad === true ? 'none' : 'block'}`}}>
                <GameCanvas />
            </CanvasPageContainer>
        </>
    )
};
