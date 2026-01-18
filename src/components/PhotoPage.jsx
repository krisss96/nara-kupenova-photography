import React, { useState, useEffect } from 'react';
import { supabase } from '../SuperbaseClient';

const _row1 = [
    { src: '/assets/Blissful Trip by Nara Kupenova.jpg', title: 'Blissful Trip' },
    { src: '/assets/Blues & Rage by Nara Kupenova.jpg', title: 'Blues & Rage' },
    { src: '/assets/Discreet the Curious Dog by Nara Kupenova.jpg', title: 'The Curious Dog' },
    { src: '/assets/Eclectics by Nara Kupenova.jpg', title: 'Eclectics' },
    { src: '/assets/00c46cdcd7ed1991236af0742648b3dc.jpg', title: 'Abstract I' },
    { src: '/assets/2a5dffc683f41978f51422f07c78f49c.jpg', title: 'City Lights' }
];

const _row2 = [
    { src: '/assets/Lense of Rules by Nara Kupenova.jpg', title: 'Lense of Rules' },
    { src: '/assets/Slavic Cat by Nara Kupenova.jpg', title: 'Slavic Cat' },
    { src: '/assets/Twins by Nara Kupenova.jpg', title: 'The Twins' },
    { src: '/assets/Wildfire in Burgundy by Nara Kupenova.jpg', title: 'Wildfire' },
    { src: '/assets/2f8a7fa0736c79d88ff18c23a16740c1.jpg', title: 'Street Shadow' },
    { src: '/assets/5c0a1b66a021a6d40156c94db15c0e5f.jpg', title: 'Modern Portrait' }
];

const _row3 = [
    { src: '/assets/8f8aa4ee42bc4d1c02a791e0efb43cc7.jpg', title: 'Golden Hour' },
    { src: '/assets/9ab8cb54575b0bb3331d971c82fa384c.jpg', title: 'Urban Legend' },
    { src: '/assets/9d59afbfac6aeb1c32414207ca2be8c4.jpg', title: 'Silence' },
    { src: '/assets/47e045d402f8e41561384a8cf0cdca9a.jpg', title: 'The Look' },
    { src: '/assets/51b36d281a6e920b78ae23e81e073ab7.jpg', title: 'Texture Study' },
    { src: '/assets/65a86e40a38a5cecb826ad8f3a19b7f7.jpg', title: 'Faded Memory' }
];

const _row4 = [
    { src: '/assets/67fef474d3805d86c586a5c32b03c5c8.jpg', title: 'Neon Nights' },
    { src: '/assets/079dd269fec2171e292090daea42627f.jpg', title: 'Morning Dew' },
    { src: '/assets/593a899d0f8739bc25cd127965a15d6a.jpg', title: 'Reflection' },
    { src: '/assets/962f61bee4858e040dfa1ff342072d84.jpg', title: 'Lost in Thought' },
    { src: '/assets/5815f68599fac40785c42abde45fe5ac.jpg', title: 'Geometric' },
    { src: '/assets/10696b07d5f4014b0a5afe14f8e93cdb.jpg', title: 'Film Grain' }
];

const _row5 = [
    { src: '/assets/318501af4c99fae3b16201abc62b648d.jpg', title: 'Noir' },
    { src: '/assets/b6672c7d8d373cbcf3db8c882e3f78fc.jpg', title: 'Contrast' },
    { src: '/assets/b832765a52441e6d9c20d68cd74d75b9.jpg', title: 'Vintage Vibes' },
    { src: '/assets/c7d8051f65e2057ebc3956dc68ab8814.jpg', title: 'Soft Focus' },
    { src: '/assets/c7674671495ba5d02d1363124296963f.jpg', title: 'Deep Blue' },
    { src: '/assets/d926dead40c5d59124c16b6d506f0fc0.jpg', title: 'Last Light' }
];

const ROW_WIDTH = 1550;
const COLM_HEIGHT = 1800;
const staticImages = [..._row1, ..._row2, ..._row3, ..._row4, ..._row5];

function PhotoPage() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [allImages, setAllImages] = useState(staticImages);


    useEffect(() => {
        const fetchImages = async () => {
            const { data, error } = await supabase.storage.from('images').list('', { limit: 100 });
            if (error) {
                console.error('Error fetching images:', error);
                return;
            }

            if (data && data.length > 0) {
                const fetchedImages = data.map(file => {
                    const { data: urlData } = supabase.storage.from('images').getPublicUrl(file.name);
                    const cleanTitle = file.name.split('_').slice(1).join(' ').replace(/\.[^/.]+$/, "") || 'Untitled';
                    return { src: urlData.publicUrl, title: cleanTitle };
                });
                setAllImages([...staticImages, ...fetchedImages]);
            }
        };
        fetchImages();
    }, []);


    const rows = Array.from({ length: 5 }, (_, i) =>
        allImages.filter((_, index) => index % 5 === i)
    );

    const handleWheel = (e) => {
        setX((prevX) => prevX - e.deltaX);
        setY((prevY) => prevY - e.deltaY);
    };

    const handleImageClick = (item) => {
        const index = allImages.findIndex(img => img.src === item.src);
        if (index !== -1) setSelectedIndex(index);
    };

    const closeOverlay = () => setSelectedIndex(null);

    const showNext = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev + 1) % allImages.length);
    };

    const showPrev = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
    };

    const loopStyleX = { transform: `translateX(${(x % ROW_WIDTH) - ROW_WIDTH}px)` };
    const loopStyleY = {
        transform: `translateY(${(y % COLM_HEIGHT) - COLM_HEIGHT}px)`,
        display: 'flex',
        flexDirection: 'column',
        gap: '50px'
    };

    return (
        <div className="photopage-content" onWheel={handleWheel}>
            <div style={loopStyleY}>

                {/*  TOP SECTION  */}
                {/* Row 1 Top */}
                <div className="row-container">
                    <div className="row-horiz" style={loopStyleX}>
                        {rows[0].map((item, i) => <img key={`top-r1-1-${i}`} src={item.src} className="photo-item" onClick={() => handleImageClick(item)} alt={item.title} />)}
                        {rows[0].map((item, i) => <img key={`top-r1-2-${i}`} src={item.src} className="photo-item" onClick={() => handleImageClick(item)} alt={item.title} />)}
                        {rows[0].map((item, i) => <img key={`top-r1-3-${i}`} src={item.src} className="photo-item" onClick={() => handleImageClick(item)} alt={item.title} />)}
                    </div>
                </div>

                {/* Row 2 Top */}
                <div className="row-container">
                    <div className="row-horiz" style={loopStyleX}>
                        {rows[1].map((item, i) => <img key={`top-r2-1-${i}`} src={item.src} className="photo-item" onClick={() => handleImageClick(item)} alt={item.title} />)}
                        {rows[1].map((item, i) => <img key={`top-r2-2-${i}`} src={item.src} className="photo-item" onClick={() => handleImageClick(item)} alt={item.title} />)}
                        {rows[1].map((item, i) => <img key={`top-r2-3-${i}`} src={item.src} className="photo-item" onClick={() => handleImageClick(item)} alt={item.title} />)}
                    </div>
                </div>

                {/* Row 3 Top */}
                <div className="row-container">
                    <div className="row-horiz" style={loopStyleX}>
                        {rows[2].map((item, i) => <img key={`top-r3-1-${i}`} src={item.src} className="photo-item" onClick={() => handleImageClick(item)} alt={item.title} />)}
                        {rows[2].map((item, i) => <img key={`top-r3-2-${i}`} src={item.src} className="photo-item" onClick={() => handleImageClick(item)} alt={item.title} />)}
                        {rows[2].map((item, i) => <img key={`top-r3-3-${i}`} src={item.src} className="photo-item" onClick={() => handleImageClick(item)} alt={item.title} />)}
                    </div>
                </div>

                {/* Row 4 Top */}
                <div className="row-container">
                    <div className="row-horiz" style={loopStyleX}>
                        {rows[3].map((item, i) => <img key={`top-r4-1-${i}`} src={item.src} className="photo-item" onClick={() => handleImageClick(item)} alt={item.title} />)}
                        {rows[3].map((item, i) => <img key={`top-r4-2-${i}`} src={item.src} className="photo-item" onClick={() => handleImageClick(item)} alt={item.title} />)}
                        {rows[3].map((item, i) => <img key={`top-r4-3-${i}`} src={item.src} className="photo-item" onClick={() => handleImageClick(item)} alt={item.title} />)}
                    </div>
                </div>

                {/* Row 5 Top */}
                <div className="row-container">
                    <div className="row-horiz" style={loopStyleX}>
                        {rows[4].map((item, i) => <img key={`top-r5-1-${i}`} src={item.src} className="photo-item" onClick={() => handleImageClick(item)} alt={item.title} />)}
                        {rows[4].map((item, i) => <img key={`top-r5-2-${i}`} src={item.src} className="photo-item" onClick={() => handleImageClick(item)} alt={item.title} />)}
                        {rows[4].map((item, i) => <img key={`top-r5-3-${i}`} src={item.src} className="photo-item" onClick={() => handleImageClick(item)} alt={item.title} />)}
                    </div>
                </div>


                {/* CENTER SECTION */}
                {/* Row 1 Center */}
                <div className="row-container">
                    <div className="row-horiz" style={loopStyleX}>
                        {rows[0].map((item, i) => <img key={`main-r1-1-${i}`} src={item.src} className="photo-item" onClick={() => handleImageClick(item)} alt={item.title} />)}
                        {rows[0].map((item, i) => <img key={`main-r1-2-${i}`} src={item.src} className="photo-item" onClick={() => handleImageClick(item)} alt={item.title} />)}
                        {rows[0].map((item, i) => <img key={`main-r1-3-${i}`} src={item.src} className="photo-item" onClick={() => handleImageClick(item)} alt={item.title} />)}
                    </div>
                </div>

                {/* Row 2 Center */}
                <div className="row-container">
                    <div className="row-horiz" style={loopStyleX}>
                        {rows[1].map((item, i) => <img key={`main-r2-1-${i}`} src={item.src} className="photo-item" onClick={() => handleImageClick(item)} alt={item.title} />)}
                        {rows[1].map((item, i) => <img key={`main-r2-2-${i}`} src={item.src} className="photo-item" onClick={() => handleImageClick(item)} alt={item.title} />)}
                        {rows[1].map((item, i) => <img key={`main-r2-3-${i}`} src={item.src} className="photo-item" onClick={() => handleImageClick(item)} alt={item.title} />)}
                    </div>
                </div>

                {/* Row 3 Center */}
                <div className="row-container">
                    <div className="row-horiz" style={loopStyleX}>
                        {rows[2].map((item, i) => <img key={`main-r3-1-${i}`} src={item.src} className="photo-item" onClick={() => handleImageClick(item)} alt={item.title} />)}
                        {rows[2].map((item, i) => <img key={`main-r3-2-${i}`} src={item.src} className="photo-item" onClick={() => handleImageClick(item)} alt={item.title} />)}
                        {rows[2].map((item, i) => <img key={`main-r3-3-${i}`} src={item.src} className="photo-item" onClick={() => handleImageClick(item)} alt={item.title} />)}
                    </div>
                </div>

                {/* Row 4 Center */}
                <div className="row-container">
                    <div className="row-horiz" style={loopStyleX}>
                        {rows[3].map((item, i) => <img key={`main-r4-1-${i}`} src={item.src} className="photo-item" onClick={() => handleImageClick(item)} alt={item.title} />)}
                        {rows[3].map((item, i) => <img key={`main-r4-2-${i}`} src={item.src} className="photo-item" onClick={() => handleImageClick(item)} alt={item.title} />)}
                        {rows[3].map((item, i) => <img key={`main-r4-3-${i}`} src={item.src} className="photo-item" onClick={() => handleImageClick(item)} alt={item.title} />)}
                    </div>
                </div>

                {/* Row 5 Center */}
                <div className="row-container">
                    <div className="row-horiz" style={loopStyleX}>
                        {rows[4].map((item, i) => <img key={`main-r5-1-${i}`} src={item.src} className="photo-item" onClick={() => handleImageClick(item)} alt={item.title} />)}
                        {rows[4].map((item, i) => <img key={`main-r5-2-${i}`} src={item.src} className="photo-item" onClick={() => handleImageClick(item)} alt={item.title} />)}
                        {rows[4].map((item, i) => <img key={`main-r5-3-${i}`} src={item.src} className="photo-item" onClick={() => handleImageClick(item)} alt={item.title} />)}
                    </div>
                </div>


                {/* BOTTOM SECTION  */}
                {/* Row 1 Bottom */}
                <div className="row-container">
                    <div className="row-horiz" style={loopStyleX}>
                        {rows[0].map((item, i) => <img key={`btm-r1-1-${i}`} src={item.src} className="photo-item" onClick={() => handleImageClick(item)} alt={item.title} />)}
                        {rows[0].map((item, i) => <img key={`btm-r1-2-${i}`} src={item.src} className="photo-item" onClick={() => handleImageClick(item)} alt={item.title} />)}
                        {rows[0].map((item, i) => <img key={`btm-r1-3-${i}`} src={item.src} className="photo-item" onClick={() => handleImageClick(item)} alt={item.title} />)}
                    </div>
                </div>

                {/* Row 2 Bottom */}
                <div className="row-container">
                    <div className="row-horiz" style={loopStyleX}>
                        {rows[1].map((item, i) => <img key={`btm-r2-1-${i}`} src={item.src} className="photo-item" onClick={() => handleImageClick(item)} alt={item.title} />)}
                        {rows[1].map((item, i) => <img key={`btm-r2-2-${i}`} src={item.src} className="photo-item" onClick={() => handleImageClick(item)} alt={item.title} />)}
                        {rows[1].map((item, i) => <img key={`btm-r2-3-${i}`} src={item.src} className="photo-item" onClick={() => handleImageClick(item)} alt={item.title} />)}
                    </div>
                </div>

                {/* Row 3 Bottom */}
                <div className="row-container">
                    <div className="row-horiz" style={loopStyleX}>
                        {rows[2].map((item, i) => <img key={`btm-r3-1-${i}`} src={item.src} className="photo-item" onClick={() => handleImageClick(item)} alt={item.title} />)}
                        {rows[2].map((item, i) => <img key={`btm-r3-2-${i}`} src={item.src} className="photo-item" onClick={() => handleImageClick(item)} alt={item.title} />)}
                        {rows[2].map((item, i) => <img key={`btm-r3-3-${i}`} src={item.src} className="photo-item" onClick={() => handleImageClick(item)} alt={item.title} />)}
                    </div>
                </div>

                {/* Row 4 Bottom */}
                <div className="row-container">
                    <div className="row-horiz" style={loopStyleX}>
                        {rows[3].map((item, i) => <img key={`btm-r4-1-${i}`} src={item.src} className="photo-item" onClick={() => handleImageClick(item)} alt={item.title} />)}
                        {rows[3].map((item, i) => <img key={`btm-r4-2-${i}`} src={item.src} className="photo-item" onClick={() => handleImageClick(item)} alt={item.title} />)}
                        {rows[3].map((item, i) => <img key={`btm-r4-3-${i}`} src={item.src} className="photo-item" onClick={() => handleImageClick(item)} alt={item.title} />)}
                    </div>
                </div>

                {/* Row 5 Bottom */}
                <div className="row-container">
                    <div className="row-horiz" style={loopStyleX}>
                        {rows[4].map((item, i) => <img key={`btm-r5-1-${i}`} src={item.src} className="photo-item" onClick={() => handleImageClick(item)} alt={item.title} />)}
                        {rows[4].map((item, i) => <img key={`btm-r5-2-${i}`} src={item.src} className="photo-item" onClick={() => handleImageClick(item)} alt={item.title} />)}
                        {rows[4].map((item, i) => <img key={`btm-r5-3-${i}`} src={item.src} className="photo-item" onClick={() => handleImageClick(item)} alt={item.title} />)}
                    </div>
                </div>

            </div>

            {selectedIndex !== null && (
                <div className="img-overlay" onClick={closeOverlay}>
                    <button className="nav-arrow left" onClick={showPrev}>&#10094;</button>
                    <img
                        src={allImages[selectedIndex].src}
                        className="open-image"
                        onClick={(e) => e.stopPropagation()}
                        alt="fullscreen"
                    />
                    <div className="image-caption" onClick={(e) => e.stopPropagation()}>
                        {allImages[selectedIndex].title}
                    </div>
                    <button className="nav-arrow right" onClick={showNext}>&#10095;</button>
                </div>
            )}
        </div>
    );
}

export default PhotoPage;