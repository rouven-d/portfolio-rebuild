import Image from "next/image";
import logo from "../public/RDLogo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <section id="footer">
        <div className="footer-container">
          <p className="footer-p">Build By</p>
          <div className="footer-img-wrapper">
            <Image
              src={logo}
              alt="Rouven Daunke Logo"
              width={120}
              height={120}
            ></Image>
          </div>
          <div className="row">
            <div className="col-12">
              <a
                href="https://github.com/rouven-d"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="footer-icon fab fa-github fa-4x"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/rouvendaunke/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="footer-icon fab fa-linkedin fa-4x"></i>
              </a>

              <a
                href="https://medium.com/@Rouven."
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="footer-icon fab fa-medium fa-4x"></i>
              </a>
            </div>
          </div>
        </div>
        <p className="copyright">Rouven Daunke Copyright © {currentYear}</p>
      </section>
    </>
  );
}
