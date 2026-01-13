import React, { useState } from 'react';
import AboutPage from './AboutPage';

const MainPage = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isNavigating, setIsNavigating] = useState(false);

    const handleGalleryClick = (e) => {
        e.preventDefault();
        setIsNavigating(true);
        setTimeout(() => window.location.href = '/work', 800);
    };

    return (
        <div>
            <div className={`flash-overlay ${isNavigating ? 'active' : ''}`}></div>
            <div className={`side-panel left-panel ${isHovering || isNavigating ? 'scrolling' : ''}`}></div>
            <div className={`side-panel right-panel ${isHovering || isNavigating ? 'scrolling' : ''}`}></div>

            <div className="home-container">
                <div className="home-content">
                    <div className="diagonal-wrapper">
                        <img
                            src="./assets/frame.png"
                            alt="Diagonal img"
                            className="diagonal-img"
                        />
                    </div>

                    <div className="text-container">
                        <h1 className="title-name">
                            NARA <br />
                            KUPENOVA
                        </h1>
                        <p className="description">
                            Hello! I am neo-street and surrealist photographer based in Varna, Bulgaria. Welcome to my portfolio!
                        </p>

                        <a href="/work"
                           className="gallery-btn"
                           onClick={handleGalleryClick}
                           onMouseEnter={() => setIsHovering(true)}
                           onMouseLeave={() => setIsHovering(false)}
                        >
                            GALLERY
                        </a>
                    </div>
                </div>
            </div>

            <AboutPage />

        </div>
    );
};

export default MainPage;