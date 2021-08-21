import Image from "next/image";
import htmlIcon from "../public/html.svg";
import cssIcon from "../public/css.svg";
import jsIcon from "../public/js.svg";
import nodeIcon from "../public/node.svg";
import reactIcon from "../public/react.svg";
import nextIcon from "../public/next.svg";

export default function Technologies() {
  return (
    <>
      <section id="technologies">
        <h2 className="technologies-title">Tech</h2>
        <div className="technologies-container">
          <div className="row">
            <div className="col col-lg-4 col-6">
              <div className="glass-elipse">
                <div className="icon-wrapper">
                  <Image
                    src={htmlIcon}
                    alt="html icon"
                    width={125}
                    height={125}
                  ></Image>
                </div>
              </div>
            </div>

            <div className="col col-lg-4 col-6">
              <div className="glass-elipse">
                <div className="icon-wrapper">
                  <Image
                    src={cssIcon}
                    alt="css icon"
                    width={125}
                    height={125}
                  ></Image>
                </div>
              </div>
            </div>

            <div className="col col-lg-4 col-6">
              <div className="glass-elipse">
                <div className="icon-wrapper">
                  <Image
                    src={jsIcon}
                    alt="javascript icon"
                    width={125}
                    height={125}
                  ></Image>
                </div>
              </div>
            </div>

            <div className="col col-lg-4 col-6">
              <div className="glass-elipse">
                <div className="icon-wrapper">
                  <Image
                    src={nodeIcon}
                    alt="node.js icon"
                    width={125}
                    height={125}
                  ></Image>
                </div>
              </div>
            </div>

            <div className="col col-lg-4 col-6">
              <div className="glass-elipse">
                <div className="icon-wrapper">
                  <Image
                    src={reactIcon}
                    alt="react icon"
                    width={125}
                    height={125}
                  ></Image>
                </div>
              </div>
            </div>

            <div className="col col-lg-4 col-6">
              <div className="glass-elipse">
                <div className="icon-wrapper">
                  <Image
                    src={nextIcon}
                    alt="next.js icon"
                    width={125}
                    height={125}
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
