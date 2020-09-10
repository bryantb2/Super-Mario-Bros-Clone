import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainMenu from '../uiComponents/pages/MainMenu';
import Game from '../uiComponents/pages/Game';
import AboutPage from '../uiComponents/pages/About';
import GameOver from '../uiComponents/pages/GameOver';

export const routes = {
    MAIN_MENU: '/',
    GAME: '/game',
    ABOUT: '/about',
    GAME_OVER: '/gameover'
};

const AppRoutes = props => (
    <Router>
        <Routes>
            <Route path={routes.MAIN_MENU} element={<MainMenu />} />
            <Route path={routes.GAME} element={<Game />} />
            <Route path={routes.GAME_OVER} element={<GameOver />} />
            <Route path={routes.ABOUT} element={<AboutPage />} />
        </Routes>
    </Router>
);

export default AppRoutes;