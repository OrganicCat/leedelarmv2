import HeaderMenu from '../HeaderMenu';
import './Header.css';

function Header() {
    return (
        <div className="content-header">
            <div className="title-header">Lee Delarm</div>
            <div className="title-text">Founder / Developer</div>
            <HeaderMenu></HeaderMenu>
        </div>
    )
}

export default Header;