import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';

export const App = () => (
    <Router>
        <Navigation />
        <hr />
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/home" element={<HomePage />} />
        </Routes>
    </Router>
);

const Navigation = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Landing</Link>
            </li>
            <li>
                <Link to="/auth">Auth</Link>
            </li>
            <li>
                <Link to="/home">Home</Link>
            </li>
        </ul>
    </nav>
);
