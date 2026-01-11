import React, { useState } from 'react';

const _row1 = [
    '/assets/Blissful Trip by Nara Kupenova.jpg',
    '/assets/Blues & Rage by Nara Kupenova.jpg',
    '/assets/Discreet the Curious Dog by Nara Kupenova.jpg',
    '/assets/Eclectics by Nara Kupenova.jpg'
];

const _row2 = [
    '/assets/Lense of Rules by Nara Kupenova.jpg',
    '/assets/Slavic Cat by Nara Kupenova.jpg',
    '/assets/Twins by Nara Kupenova.jpg',
    '/assets/Wildfire in Burgundy by Nara Kupenova.jpg'
];

function PhotoPage() {
    const [x, setX] = useState(0);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);

    const handleMouseDown = (e) => {
        setIsDown(true);
        setStartX(e.clientX - x);
    };

    const handleMouseUp = () => {
        setIsDown(false);
    };

    const handleMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault(); // prevents weird selecting of text while dragging

        const currentMousePosition = e.clientX;
        const newMousePosition = currentMousePosition - startX;

        setX(newMousePosition);
    };

    return (
        <div className="photopage-content">

            <div
                className="row-container"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                <div className="row-horiz" style={{ transform: `translateX(${x}px)` }}>
                    {_row1.map((src, index) => (
                        <img
                            key={`row1-orig-${index}`}
                            src={src}
                            alt="gallery"
                            className="photo-item"
                        />
                    ))}

                    {_row1.map((src, index) => (
                        <img
                            key={`row1-clone-${index}`}
                            src={src}
                            alt="gallery"
                            className="photo-item"
                        />
                    ))}

                </div>
            </div>

            <div
                className="row-container"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                <div className="row-horiz" style={{ transform: `translateX(${x}px)` }}>
                    {_row2.map((src, index) => (
                        <img
                            key={`row2-orig-${index}`}
                            src={src}
                            alt="gallery"
                            className="photo-item"
                        />
                    ))}

                    {_row2.map((src, index) => (
                        <img
                            key={`row2-clone-${index}`}
                            src={src}
                            alt="gallery"
                            className="photo-item"
                        />
                    ))}
                </div>
            </div>

        </div>
    );
}

export default PhotoPage;
