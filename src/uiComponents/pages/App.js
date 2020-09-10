import React from 'react';
import ReduxService from '../../boilerplate/storeConfig';
import GlobalStyle, { theme } from '../../boilerplate/globalStyles';
import { ThemeProvider } from 'styled-components';
import Routes from '../../boilerplate/Routes';
import GameFrame from '../containers/GameFrame';

const App = () => (
    <ReduxService>
        <ThemeProvider theme={theme}>
            <GameFrame>
                <Routes />
            </GameFrame>
            <GlobalStyle />
        </ThemeProvider>
    </ReduxService>
);

export default App;
