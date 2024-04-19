import { Link, useLocation } from "react-router-dom";

function NavHeader () {
    const currentPage = useLocation().pathname;

    const isDisabled = (pageCom) => {
        if (currentPage === pageCom) {
            return true;
        } else {
            return false;
        }
    }
    return(
        <header className="box p-2 pr-5 pl-5">
            <h1 className="title is-1 block mb-2 p-0">
                Ian's Portfolio
            </h1>
            <nav className="m-0 columns">
                <Link to='/about' className='button is-link column m-2' disabled={isDisabled('/about') || isDisabled('/')}>About Me</Link>
                <Link to='/projects' className='button is-link column m-2' disabled={isDisabled('/projects')}>My Projects</Link>
                <Link to='/resume' className='button is-link column m-2' disabled={isDisabled('/resume')}>My Resume</Link>
                <Link to='/contact' className='button is-link column m-2' disabled={isDisabled('/contact')}>Contact Me</Link>
            </nav>
        </header>
    )
}

export default NavHeader;