import MainPage from "./components/MainPage";
import PhotoPage from "./components/PhotoPage";
import AboutPage from "./components/AboutPage";
import Navbar from "./components/Navbar";


function App() {
    return (
        <main>

            <Navbar />

            <div id="home" className="section" style={{ backgroundColor: '#fff' }}>
                <MainPage />
            </div>

            {/* Section 2: My Work */}
            <div id="work" className="section" style={{ backgroundColor: '#f9f9f9' }}>
                <PhotoPage />
            </div>

            {/* Section 3: About Me */}
            <div id="about" className="section" style={{ backgroundColor: '#fff' }}>
                <AboutPage />
            </div>

        </main>
    );
}

export default App;