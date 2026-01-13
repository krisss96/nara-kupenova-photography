import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from "./components/MainPage";
import PhotoPage from "./components/PhotoPage";
import AboutPage from "./components/AboutPage";
import Navbar from "./components/Navbar";


function App() {
    return (
        <Router>

            <main>

                <Navbar />

                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/work" element={<PhotoPage />} />
                </Routes>

            </main>

        </Router>
    );
}

export default App;