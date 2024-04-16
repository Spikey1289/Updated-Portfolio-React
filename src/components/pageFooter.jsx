function FooterLinks() {
    return (
        <nav className="navbar is-dark is-fixed-bottom columns">
            <h3 className="title is-5 block m-0 mt-auto mb-auto ml-3">
                My Links:
            </h3>
            <div className="navbar-brand">
                <div className="navbar-item Github">
                    <a href="https://github.com/" target="_blank" className="button">GitHub</a>
                </div>
                <div className="navbar-item LinkedIn">
                    <a href="https://www.linkedin.com/" target="_blank" className="button">Linked In</a>
                </div>
                <div className="navbar-item StackOverflow">
                    <a href="https://stackoverflow.com" target="_blank" className="button">Stack Overflow</a>
                </div>
            </div>
        </nav>
    )
}

export default FooterLinks;