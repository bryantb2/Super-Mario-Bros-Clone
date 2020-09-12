import React from 'react';
import GameCanvas from "../containers/GameCanvas";
import { CanvasPageContainer } from "../elements";

export default props => (
    <CanvasPageContainer>
        <GameCanvas />
    </CanvasPageContainer>
);