export default function NoteCard() {
  return (
    <>
      <div className="glass-card">
        <div className="row">
          <div className="col col-lg-6 col-12">
            <h3 className="project-name">Note Keeper App</h3>
            <p className="project-tags">#React #MaterialUI #Heroku</p>
            <button
              type="button"
              className="project-button btn btn-lg btn-outline-dark"
            >
              <a
                href="https://github.com/rouven-d/Keeper-Note-App"
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
                href="https://dazzling-ramanujan-696cdf.netlify.app/"
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
              src="project2.svg"
              alt="Note Keeper project mockuo"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}
