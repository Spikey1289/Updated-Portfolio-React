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
            <nav className="navbar block m-0">
                <div className="navbar-brand">
                    {/* <div className="navbar-item home">
                        <Link to='/' className='button is-link' disabled={isDisabled('/')}>Home</Link>
                    </div> */}
                    <div className="navbar-item about">
                        <Link to='/about' className='button is-link' disabled={isDisabled('/about') || isDisabled('/')}>About Me</Link>
                    </div>
                    <div className="navbar-item projects">
                        <Link to='/projects' className='button is-link' disabled={isDisabled('/projects')}>My Projects</Link>
                    </div>
                    <div className="navbar-item resume">
                        <Link to='/resume' className='button is-link' disabled={isDisabled('/resume')}>My Resume</Link>
                    </div>
                    <div className="navbar-item contact">
                        <Link to='/contact' className='button is-link' disabled={isDisabled('/contact')}>Contact Me</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavHeader;