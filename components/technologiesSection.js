export default function Technologies() {
  return (
    <>
      <section id="technologies">
        <h2 className="technologies-title">Tech</h2>
        <div className="technologies-container">
          <div className="row">
            <div className="col col-lg-4 col-6">
              <div className="glass-elipse">
                <img
                  className="icon-wrapper"
                  src="html.svg"
                  alt="html icon"
                ></img>
              </div>
            </div>

            <div className="col col-lg-4 col-6">
              <div className="glass-elipse">
                <img
                  className="icon-wrapper"
                  src="css.svg"
                  alt="css icon"
                ></img>
              </div>
            </div>

            <div className="col col-lg-4 col-6">
              <div className="glass-elipse">
                <img className="icon-wrapper" src="js.svg" alt="js icon"></img>
              </div>
            </div>

            <div className="col col-lg-4 col-6">
              <div className="glass-elipse">
                <img
                  className="icon-wrapper"
                  src="node.svg"
                  alt="node icon"
                ></img>
              </div>
            </div>

            <div className="col col-lg-4 col-6">
              <div className="glass-elipse">
                <img
                  className="icon-wrapper"
                  src="react.svg"
                  alt="react icon"
                ></img>
              </div>
            </div>

            <div className="col col-lg-4 col-6">
              <div className="glass-elipse">
                <img
                  className="icon-wrapper"
                  src="next.svg"
                  alt="next icon"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
