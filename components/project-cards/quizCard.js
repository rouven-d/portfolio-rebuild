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
            <img
              className="project-img"
              src="project1.svg"
              alt="Quiz App project mockup"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}
