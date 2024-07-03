import React from "react";
import "./styles/AboutPage.css";
import videoSource from "./images/Bite_Rain_R.mp4";

const AboutPage: React.FC = () => {
  return (
    <div>
      <video id="background-video" autoPlay loop muted>
        <source src={videoSource} type="video/mp4" />
      </video>
      <div id="core">
        <div className="main-div">
          <ul style={{ padding: "5%", textAlign: "left" }}>
            <li>Belozerov Egor 18 yo</li>
            <li>Innopolis University Student 2023-2027 june</li>
            <li>
              stack: backend - C#/.net, ++, python (a litle bit html,css,js,ts)
            </li>
            <li>linux native</li>
            <li>english b2 proficiency level</li>
            <li>in love with algorithms</li>
          </ul>
        </div>
        <button
          className="button-27"
          onClick={() => (window.location.href = "/resume")}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
