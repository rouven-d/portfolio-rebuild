import Image from "next/image";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <Image
            src="/RDLogo.png"
            alt="Rouven Daunke Personal Logo"
            width={80}
            height={80}
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
                <i className="icon-nav fab fa-medium fa-2x"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com/rouven-d"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icon-nav fab fa-github fa-2x"></i>
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
