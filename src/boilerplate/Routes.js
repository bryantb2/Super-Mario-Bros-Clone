import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainMenu from '../uiComponents/pages/MainMenu';
import Game from '../uiComponents/pages/Game';
import AboutPage from '../uiComponents/pages/About';
import LoadingScreen from '../uiComponents/pages/Loading';

export const routes = {
    MAIN_MENU: '/',
    GAME: '/game',
    GAME_PLAYER_NUM: '/game/:playerNumber',
    GAME_LOADING: '/gameLoading',
    ABOUT: '/about'
};

export const playerParams = {
    ONE_PLAYERS: 'onePlayers',
    TWO_PLAYERS: 'twoPlayers'
};

// todo: check if array of paths can be used
const AppRoutes = props => (
    <Router>
        <Routes>
            <Route path={routes.ABOUT} element={<AboutPage />} />
            <Route path={routes.MAIN_MENU} element={<MainMenu />} />
            <Route path={routes.GAME_LOADING} element={<LoadingScreen />} />
            <Route path={routes.GAME} element={<Game />} />
            <Route path={routes.GAME_PLAYER_NUM} element={<Game />} />
        </Routes>
    </Router>
);

export default AppRoutes;