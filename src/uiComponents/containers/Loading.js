import React from 'react';
import { useSelector, useDispatch} from "react-redux";
import { NextWorld, PlayerLives } from "../components";
import { LoadingContent } from "../elements";

export default props => (
    <LoadingContent>
        <NextWorld
            worldNumber={1}
            levelNumber={1}
        />
        <PlayerLives playerLives={3} />
    </LoadingContent>
);