export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="RDLogo.png"
            alt="Rouven Daunke Personal Logo"
            className="nav-image"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://medium.com/@Rouven."
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="icon-nav"
                  src="mediumNav.svg"
                  alt="Medium Icon"
                ></img>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com/rouven-d"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="icon-nav"
                  src="githubNav.svg"
                  alt="Github Icon"
                ></img>
              </a>
            </li>
          </ul>
          <button type="button" className="btn-nav btn btn-outline-dark">
            <a href="#contact">Contact Me</a>
          </button>
        </div>
      </div>
    </nav>
  );
}
