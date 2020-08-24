import React from 'react';
import ReduxService from '../boilerplate/storeConfig';
import GlobalStyle from '../boilerplate/globalStyles';
import Routes from '../boilerplate/Routes';
import { ThemeProvider } from 'styled-components';

const App = () => (
    <ReduxService>
        <ThemeProvider theme={}>
            <Routes />
            <GlobalStyle />
        </ThemeProvider>
    </ReduxService>
);

export default App;
