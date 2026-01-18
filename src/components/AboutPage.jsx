import React from 'react';

const textContent = [
    {
        id: 1,
        text: "My name is Nara Kupenova, a multimedia artist born in 2006 in Varna, Bulgaria. I work across photography and digital art, using visual storytelling as a way to explore emotion and atmosphere.",
        imgLabelTop: "ABOUT",
        imgLabelBottom: "ME",
        imgSrc: "./assets/portrait.png"
    },
    {
        id: 2,
        text: "I create conceptual artworks that blend street photography with surrealist aesthetics. I combine photographic elements with digital manipulation and traditional techniques to create images that exist between reality and imagination.My work often focuses on mood, subconscious emotion and the contrast between the visible world and inner experience.",
        imgLabelTop: "MY",
        imgLabelBottom: "WORK",
        imgSrc: "./assets/Group4.png"
    },
    {
        id: 3,
        text: "I create surrealist and conceptual photography for individuals who are looking for expressive, artistic images beyond traditional portraiture. I am available for creative photo sessions and collaborations.If you are interested in working together, exhibiting my work or creating something unique, feel free to get in touch for more information.",
        imgLabelTop: "WORKING",
        imgLabelBottom: "WITH ME",
        imgSrc: "./assets/portrait2.png"
    }
];

function AboutPage() {
    return (
        <section id="about-section" className="about-section">
            <div className="about-container">

                {textContent.map((item, index) => (
                    <div
                        key={item.id}
                        className={`about-row ${index % 2 === 1 ? 'reverse' : ''}`}
                    >
                        <div className="about-image-col">
                            <h2 className="overlay-text top-left">{item.imgLabelTop}</h2>
                            <div className="image-wrapper">
                                <img
                                    src={item.imgSrc}
                                    alt="Nara Kupenova"
                                    className="about-portrait"
                                />
                            </div>
                            <h2 className="overlay-text bottom-right">{item.imgLabelBottom}</h2>
                        </div>

                        <div className="about-text-col">
                            <div className="grey-text-box">
                                <p>{item.text}</p>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="contacts">

                    <div className="contact-col">
                        <h3>LET'S COLLABORATE</h3>
                        <p className="contact-info">08778000000</p>
                        <p className="contact-info">narakupenovaart@gmail.com</p>
                    </div>

                    <div className="contact-col">
                        <h3>MY BLOGS</h3>
                        <a href="https://open.substack.com/pub/narcarca/p/bdf?utm_campaign=post&utm_medium=web" target="_blank" rel="noopener noreferrer">Чарът на абстрактната и сюрреалистична фотография</a>
                        <a href="https://open.substack.com/pub/narcarca/p/neo-street-photography-a-journey?utm_campaign=post&utm_medium=web" target="_blank" rel="noopener noreferrer">Neo Street Photography. A Journey from Distortion to Resolution</a>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default AboutPage;