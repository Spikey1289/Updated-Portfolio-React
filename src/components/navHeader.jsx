import { Link, useLocation } from "react-router-dom";

function NavTabs () {
    const currentPage = useLocation().pathname;
    return(
        <ul className="nav nav-tabs">
            <li className="nav nav-item home">
                <Link to='/' className={currentPage === '/' ? 'active' : 'inactive'}>Home</Link>
            </li>
            <li className="nav nav-item about">
                <Link to='/about' className={currentPage === '/' ? 'active' : 'inactive'}>About Me</Link>
            </li>
            <li className="nav nav-item projects">
                <Link to='/projects' className={currentPage === '/' ? 'active' : 'inactive'}>My Projects</Link>
            </li>
            <li className="nav nav-item resume">
                <Link to='/resume' className={currentPage === '/' ? 'active' : 'inactive'}>My Resume</Link>
            </li>
            <li className="nav nav-item contact">
                <Link to='/contact' className={currentPage === '/' ? 'active' : 'inactive'}>Contact Me</Link>
            </li>
        </ul>
    )
}