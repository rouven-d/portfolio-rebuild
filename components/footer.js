export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <section id="footer">
        <div className="footer-container">
          <p className="footer-p">Build By</p>

          <img
            className="footer-img"
            src="RDLogo.png"
            alt="Rouven Daunke Logo"
          ></img>

          <div className="row">
            <div className="col-12">
              <a
                href="https://github.com/rouven-d"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="footer-icon"
                  src="github.svg"
                  alt="Github Icon"
                ></img>
              </a>

              <a
                href="https://www.linkedin.com/in/rouvendaunke/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="footer-icon"
                  src="linkedin.svg"
                  alt="LinkedIn Icon"
                ></img>
              </a>

              <a
                href="https://medium.com/@Rouven."
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="footer-icon"
                  src="medium.svg"
                  alt="Medium Icon"
                ></img>
              </a>
            </div>
          </div>
        </div>
        <p className="copyright">Rouven Daunke Copyright © {currentYear}</p>
      </section>
    </>
  );
}
