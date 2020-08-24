import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainMenu from '../pages/MainMenu';
import Game from '../pages/Game';
import AboutPage from '../pages/About';

export const routes = {
    MAIN_MENU: '/',
    GAME: '/game',
    ABOUT: '/about'
}

const AppRoutes = props => (
    <Router>
        <Routes>
            <Route path={routes.MAIN_MENU} element={<MainMenu />} />
            <Route path={routes.GAME} element={<Game />} />
            <Route path={routes.ABOUT} element={<AboutPage />} />
        </Routes>
    </Router>
);

export default AppRoutes;