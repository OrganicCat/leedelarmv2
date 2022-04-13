import { Link } from 'react-router-dom';
import './SlideMenu.css';

function SlideMenu() {
    return (
        <div className="slide-menu">
            <Link to="/"><div className="interactive-icon">About Me</div></Link>
            <div className="vertical-line"><div className="moving-line"></div></div>
            <Link to="/projects"><div className="interactive-icon">Projects</div></Link>
            <div className="vertical-line"><div className="moving-line"></div></div>
            <div className="interactive-icon">Interests</div>
            <div className="vertical-line"><div className="moving-line"></div></div>
            <div className="interactive-icon">Blog (TBA)</div>
            <div className="vertical-line"><div className="moving-line"></div></div>
            <div className="interactive-icon">Resume</div>
        </div>
    )
}

export default SlideMenu;