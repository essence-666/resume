import React from "react";
import "./styles/ProjectsPage.css";
import videoSource from "./images/Bite_Rain_R.mp4";

const ProjectsPage: React.FC = () => {
  return (
    <div>
      <video id="background-video" autoPlay loop muted>
        <source src={videoSource} type="video/mp4" />
      </video>
      <div id="core">
        <div className="main-div">
          <ul style={{ padding: "5%", textAlign: "left" }}>
            <li>
              c# anonymous
              <a
                className="links"
                href="https://github.com/essence-666/c-AnonBot"
              >
                telegram-bot
              </a>
            </li>
            <li>
              python ask/answer
              <a
                className="links"
                href="https://github.com/essence-666/flaskwebproject"
              >
                web-site
              </a>
            </li>
            <li>
              python
              <a
                className="links"
                href="https://github.com/essence-666/scrapperbottg"
              >
                telegram-bot
              </a>
              schedulling parsing
            </li>
          </ul>
        </div>
        <button
          className="button-27"
          onClick={() => (window.location.href = "/")}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ProjectsPage;
