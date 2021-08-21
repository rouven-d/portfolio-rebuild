import Image from "next/image";
import project3 from "../../public/project3.svg";

export default function HiroiCard() {
  return (
    <>
      <div className="glass-card">
        <div className="row">
          <div className="col col-lg-6 col-12">
            <h3 className="project-name">Hiroi.io</h3>
            <p className="project-tags">#Marketing #Blog #Newsletter</p>
            <button
              type="button"
              className="project-button btn btn-lg btn-outline-dark disabled"
            >
              <i className="button-disabled fas fa-ban fa-2x"></i>
            </button>
            <br></br>
            <button
              type="button"
              className="project-button btn btn-lg btn-outline-dark"
            >
              <a
                href="https://hiroi.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Project
              </a>
            </button>
          </div>
          <div className="col col-lg-6 col-12">
            <div className="project-img">
              <Image
                src={project3}
                alt="hiroi.io project mockup"
                width={800}
                height={580}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
