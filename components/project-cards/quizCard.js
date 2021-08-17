import Image from "next/image";
import project1 from "../../public/project1.svg";

export default function QuizCard() {
  return (
    <>
      <div className="glass-card">
        <div className="row">
          <div className="col col-lg-6 col-12">
            <h3 className="project-name">Quiz App</h3>
            <p className="project-tags">#React #Firebase #API #PWA</p>
            <button
              type="button"
              className="project-button btn btn-lg btn-outline-dark"
            >
              <a
                href="https://github.com/rouven-d/react-quiz-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
            </button>
            <br></br>
            <button
              type="button"
              className="project-button btn btn-lg btn-outline-dark"
            >
              <a
                href="https://quiz-app-react2.netlify.app/"
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
                src={project1}
                alt="react Quiz Project Mockup"
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
