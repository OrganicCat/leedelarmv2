import { Route, Routes } from 'react-router-dom';
import About from '../About/About';
import Projects from '../Projects';
import SlideMenu from '../SlideMenu';
import './Body.css';

function Body() {
    return (
        <div className="main-page">
            <SlideMenu></SlideMenu>
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="projects" element={<Projects />} />
            </Routes>
        </div>
    )

}

export default Body;