import React, { useState } from 'react';

const _row1 = [
    '/assets/Blissful Trip by Nara Kupenova.jpg',
    '/assets/Blues & Rage by Nara Kupenova.jpg',
    '/assets/Discreet the Curious Dog by Nara Kupenova.jpg',
    '/assets/Eclectics by Nara Kupenova.jpg',
    '/assets/00c46cdcd7ed1991236af0742648b3dc.jpg',
    '/assets/2a5dffc683f41978f51422f07c78f49c.jpg'
];

const _row2 = [
    '/assets/Lense of Rules by Nara Kupenova.jpg',
    '/assets/Slavic Cat by Nara Kupenova.jpg',
    '/assets/Twins by Nara Kupenova.jpg',
    '/assets/Wildfire in Burgundy by Nara Kupenova.jpg',
    '/assets/2f8a7fa0736c79d88ff18c23a16740c1.jpg',
    '/assets/5c0a1b66a021a6d40156c94db15c0e5f.jpg'
];

const _row3 = [
    '/assets/8f8aa4ee42bc4d1c02a791e0efb43cc7.jpg',
    '/assets/9ab8cb54575b0bb3331d971c82fa384c.jpg',
    '/assets/9d59afbfac6aeb1c32414207ca2be8c4.jpg',
    '/assets/47e045d402f8e41561384a8cf0cdca9a.jpg',
    '/assets/51b36d281a6e920b78ae23e81e073ab7.jpg',
    '/assets/65a86e40a38a5cecb826ad8f3a19b7f7.jpg'
];

const _row4 = [
    '/assets/67fef474d3805d86c586a5c32b03c5c8.jpg',
    '/assets/079dd269fec2171e292090daea42627f.jpg',
    '/assets/593a899d0f8739bc25cd127965a15d6a.jpg',
    '/assets/962f61bee4858e040dfa1ff342072d84.jpg',
    '/assets/5815f68599fac40785c42abde45fe5ac.jpg',
    '/assets/10696b07d5f4014b0a5afe14f8e93cdb.jpg'
];

const _row5 = [
    '/assets/318501af4c99fae3b16201abc62b648d.jpg',
    '/assets/b6672c7d8d373cbcf3db8c882e3f78fc.jpg',
    '/assets/b832765a52441e6d9c20d68cd74d75b9.jpg',
    '/assets/c7d8051f65e2057ebc3956dc68ab8814.jpg',
    '/assets/c7674671495ba5d02d1363124296963f.jpg',
    '/assets/d926dead40c5d59124c16b6d506f0fc0.jpg'
];

const ROW_WIDTH = 1550;
const COLM_HEIGHT = 1800;

function PhotoPage() {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const handleWheel = (e) => {
        setX((prevX) => prevX - e.deltaX);
        setY((prevY) => prevY - e.deltaY);

    };

    const loopStyleX = {
        transform: `translateX(${(x % ROW_WIDTH) - ROW_WIDTH}px)`,
    };

    const loopStyleY = {
        transform: `translateY(${(y % COLM_HEIGHT) - COLM_HEIGHT}px)`,
        display: 'flex',
        flexDirection: 'column',
        gap: '50px'
    };

    return (
        <div className="photopage-content" onWheel={handleWheel}>
            <div style={loopStyleY}>

                {/* Row 1 Top */}
                <div className="row-container">
                    <div className="row-horiz" style={loopStyleX}>
                        {_row1.map((src, i) => <img key={`top-r1-1-${i}`} src={src} className="photo-item" />)}
                        {_row1.map((src, i) => <img key={`top-r1-2-${i}`} src={src} className="photo-item" />)}
                        {_row1.map((src, i) => <img key={`top-r1-3-${i}`} src={src} className="photo-item" />)}
                    </div>
                </div>

                {/* Row 2 Top */}
                <div className="row-container">
                    <div className="row-horiz" style={loopStyleX}>
                        {_row2.map((src, i) => <img key={`top-r2-1-${i}`} src={src} className="photo-item" />)}
                        {_row2.map((src, i) => <img key={`top-r2-2-${i}`} src={src} className="photo-item" />)}
                        {_row2.map((src, i) => <img key={`top-r2-3-${i}`} src={src} className="photo-item" />)}
                    </div>
                </div>

                {/* Row 3 Top */}
                <div className="row-container">
                    <div className="row-horiz" style={loopStyleX}>
                        {_row3.map((src, i) => <img key={`top-r3-1-${i}`} src={src} className="photo-item" />)}
                        {_row3.map((src, i) => <img key={`top-r3-2-${i}`} src={src} className="photo-item" />)}
                        {_row3.map((src, i) => <img key={`top-r3-3-${i}`} src={src} className="photo-item" />)}
                    </div>
                </div>

                {/* Row 4 Top */}
                <div className="row-container">
                    <div className="row-horiz" style={loopStyleX}>
                        {_row4.map((src, i) => <img key={`top-r4-1-${i}`} src={src} className="photo-item" />)}
                        {_row4.map((src, i) => <img key={`top-r4-2-${i}`} src={src} className="photo-item" />)}
                        {_row4.map((src, i) => <img key={`top-r4-3-${i}`} src={src} className="photo-item" />)}
                    </div>
                </div>

                {/* Row 5 Top */}
                <div className="row-container">
                    <div className="row-horiz" style={loopStyleX}>
                        {_row5.map((src, i) => <img key={`top-r5-1-${i}`} src={src} className="photo-item" />)}
                        {_row5.map((src, i) => <img key={`top-r5-2-${i}`} src={src} className="photo-item" />)}
                        {_row5.map((src, i) => <img key={`top-r5-3-${i}`} src={src} className="photo-item" />)}
                    </div>
                </div>

                {/* Row 1 Center */}
                <div className="row-container">
                    <div className="row-horiz" style={loopStyleX}>
                        {_row1.map((src, i) => <img key={`main-r1-1-${i}`} src={src} className="photo-item" />)}
                        {_row1.map((src, i) => <img key={`main-r1-2-${i}`} src={src} className="photo-item" />)}
                        {_row1.map((src, i) => <img key={`main-r1-3-${i}`} src={src} className="photo-item" />)}
                    </div>
                </div>

                {/* Row 2 Center */}
                <div className="row-container">
                    <div className="row-horiz" style={loopStyleX}>
                        {_row2.map((src, i) => <img key={`main-r2-1-${i}`} src={src} className="photo-item" />)}
                        {_row2.map((src, i) => <img key={`main-r2-2-${i}`} src={src} className="photo-item" />)}
                        {_row2.map((src, i) => <img key={`main-r2-3-${i}`} src={src} className="photo-item" />)}
                    </div>
                </div>

                {/* Row 3 Center */}
                <div className="row-container">
                    <div className="row-horiz" style={loopStyleX}>
                        {_row3.map((src, i) => <img key={`main-r3-1-${i}`} src={src} className="photo-item" />)}
                        {_row3.map((src, i) => <img key={`main-r3-2-${i}`} src={src} className="photo-item" />)}
                        {_row3.map((src, i) => <img key={`main-r3-3-${i}`} src={src} className="photo-item" />)}
                    </div>
                </div>

                {/* Row 4 Center */}
                <div className="row-container">
                    <div className="row-horiz" style={loopStyleX}>
                        {_row4.map((src, i) => <img key={`main-r4-1-${i}`} src={src} className="photo-item" />)}
                        {_row4.map((src, i) => <img key={`main-r4-2-${i}`} src={src} className="photo-item" />)}
                        {_row4.map((src, i) => <img key={`main-r4-3-${i}`} src={src} className="photo-item" />)}
                    </div>
                </div>

                {/* Row 5 Center */}
                <div className="row-container">
                    <div className="row-horiz" style={loopStyleX}>
                        {_row5.map((src, i) => <img key={`main-r5-1-${i}`} src={src} className="photo-item" />)}
                        {_row5.map((src, i) => <img key={`main-r5-2-${i}`} src={src} className="photo-item" />)}
                        {_row5.map((src, i) => <img key={`main-r5-3-${i}`} src={src} className="photo-item" />)}
                    </div>
                </div>

                {/* Row 1 Bottom */}
                <div className="row-container">
                    <div className="row-horiz" style={loopStyleX}>
                        {_row1.map((src, i) => <img key={`btm-r1-1-${i}`} src={src} className="photo-item" />)}
                        {_row1.map((src, i) => <img key={`btm-r1-2-${i}`} src={src} className="photo-item" />)}
                        {_row1.map((src, i) => <img key={`btm-r1-3-${i}`} src={src} className="photo-item" />)}
                    </div>
                </div>

                {/* Row 2 Bottom */}
                <div className="row-container">
                    <div className="row-horiz" style={loopStyleX}>
                        {_row2.map((src, i) => <img key={`btm-r2-1-${i}`} src={src} className="photo-item" />)}
                        {_row2.map((src, i) => <img key={`btm-r2-2-${i}`} src={src} className="photo-item" />)}
                        {_row2.map((src, i) => <img key={`btm-r2-3-${i}`} src={src} className="photo-item" />)}
                    </div>
                </div>

                {/* Row 3 Bottom */}
                <div className="row-container">
                    <div className="row-horiz" style={loopStyleX}>
                        {_row3.map((src, i) => <img key={`btm-r3-1-${i}`} src={src} className="photo-item" />)}
                        {_row3.map((src, i) => <img key={`btm-r3-2-${i}`} src={src} className="photo-item" />)}
                        {_row3.map((src, i) => <img key={`btm-r3-3-${i}`} src={src} className="photo-item" />)}
                    </div>
                </div>

                {/* Row 4 Bottom */}
                <div className="row-container">
                    <div className="row-horiz" style={loopStyleX}>
                        {_row4.map((src, i) => <img key={`btm-r4-1-${i}`} src={src} className="photo-item" />)}
                        {_row4.map((src, i) => <img key={`btm-r4-2-${i}`} src={src} className="photo-item" />)}
                        {_row4.map((src, i) => <img key={`btm-r4-3-${i}`} src={src} className="photo-item" />)}
                    </div>
                </div>

                {/* Row 5 Bottom */}
                <div className="row-container">
                    <div className="row-horiz" style={loopStyleX}>
                        {_row5.map((src, i) => <img key={`btm-r5-1-${i}`} src={src} className="photo-item" />)}
                        {_row5.map((src, i) => <img key={`btm-r5-2-${i}`} src={src} className="photo-item" />)}
                        {_row5.map((src, i) => <img key={`btm-r5-3-${i}`} src={src} className="photo-item" />)}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default PhotoPage;