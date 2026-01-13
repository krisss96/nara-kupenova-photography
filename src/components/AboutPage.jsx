import React, { useState } from 'react';

const textContent = [
    {
        id: 1,
        text: "I am a visual storyteller fascinated by the raw energy of the streets and the surreal nature of everyday life. Photography for me is not just about capturing a moment, but about framing a feeling."
    },
    {
        id: 2,
        text: "Based in Varna, I explore the interplay between light, shadow, and color. My work is heavily inspired by neo-noir aesthetics and the unexpected beauty found in urban decay."
    },
    {
        id: 3,
        text: "Available for portraits, event photography, and creative collaborations. Let's create something timeless together."
    }
];

function AboutPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleAdvance = () => {
        if (isAnimating) return;

        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % textContent.length);
            setIsAnimating(false);
        }, 600);
    };

    return (
        <section id="about-section" className="about-section">
            <div className="about-content">

                <div className="about-left-col">
                    <h2 className="about-title">ABOUT</h2>
                    <img
                        src="./assets/portrait.png"
                        alt="Nara Kupenova"
                        className="about-portrait"
                    />
                    <h2 className="about-title" style={{textAlign: 'right', width: '100%'}}>ME</h2>
                </div>

                <div className="about-right-col">
                    <div
                        className={`film-text ${isAnimating ? 'rolling' : ''}`}
                        onClick={handleAdvance}
                    >
                        <div key={currentIndex} className={`text-content ${isAnimating ? 'fade-out' : 'fade-in'}`}>
                            <p>{textContent[currentIndex].text}</p>
                        </div>

                        <div className="click">CLICK HERE</div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default AboutPage;