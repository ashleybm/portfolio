import logo from '../assets/ac_logo_dark.svg';
import './Nav.css';

function Nav() {
    return (
        <div className="Nav">
            <header className="Nav-header">
                <img src={logo} className="Nav-logo" alt="AshleyMCopelandLogo" href="/portfolio" />
                <a
                    className="Home"
                    href="/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Home
                </a>
                <a
                    className="Resume"
                    href="/resume"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Resume
                </a>
            </header>
        </div>
    );
}

export default Nav;