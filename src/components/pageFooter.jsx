function FooterLinks() {
    return (
        <nav className="navbar is-dark columns is-fixed-bottom">
            {/* desktop navs */}
            <div className="navbar-item container px-5 mb-2 mt-1 mx-0 column is-3 is-hidden-mobile">
                <h3 className="title is-5">
                    My Links:
                </h3>
            </div>
            <a href="https://github.com/" target="_blank" className="button navbar-item column is-3 p-2 my-1 Github is-hidden-mobile">GitHub</a>
            <a href="https://www.linkedin.com/" target="_blank" className="button navbar-item column is-3 p-2 my-1 LinkedIn is-hidden-mobile">Linked In</a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ianmstevenson1@gmail.com" target="_blank" className="button navbar-item column is-3 p-2 my-1 StackOverflow is-hidden-mobile">Email</a>

            {/* mobile navs */}
            <div className="navbar-item has-dropdown has-dropdown-up is-hidden-desktop">
                <a className="title is-5 px-5 mb-2 mt-1 mx-0 navbar-link">
                    My Links:
                </a>
                <div className="navbar-dropdown">
                    <a href="https://github.com/" target="_blank" className="button navbar-item p-2 my-1 Github is-hidden-desktop">GitHub</a>
                    <a href="https://www.linkedin.com/" target="_blank" className="button navbar-item p-2 my-1 LinkedIn is-hidden-desktop">Linked In</a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ianmstevenson1@gmail.com" target="_blank" className="button navbar-item p-2 my-1 Email is-hidden-desktop">Email</a>
                </div>
            </div>
        </nav>
    )
}

export default FooterLinks;