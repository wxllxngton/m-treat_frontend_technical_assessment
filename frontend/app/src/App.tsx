import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import { Provider } from 'react-redux';
import store from './store/store';
// import './index.css';

export const App: React.FC = () => (
    <Provider store={store}>
        <Router>
            <hr />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/home" element={<HomePage />} />
            </Routes>
        </Router>
    </Provider>
);
