import React from "react";
import { Link } from "react-router-dom";
import "./styles/MainPage.css";
import mobImage from "./images/mob.avif";
import gitIcon from "./images/git.svg";
import leetcodeIcon from "./images/leetcode.png";
import telegramIcon from "./images/Telegram_logo.svg.webp";
import emailIcon from "./images/281769.png";
import backgroundVideo from "./images/Bite_Rain_R.mp4";

const MainPage: React.FC = () => {
  return (
    <div>
      <video id="background-video" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
        {/* Add more source elements for other video formats if needed */}
      </video>
      <div id="core">
        <div className="main-div">
          <img src={mobImage} alt="mob" className="mob" />
          <p className="links" style={{ textAlign: "left" }}>
            Hi! I am a first year undergraduate student at Innopolis University
            <br />
            <a
              style={{ marginLeft: "25%" }}
              href="https://github.com/essence-666"
            >
              <img className="icons" src={gitIcon} alt="GitHub" />
            </a>
            <a href="https://leetcode.com/u/essence-/">
              <img className="icons" src={leetcodeIcon} alt="LeetCode" />
            </a>
            <a href="https://t.me/againlose">
              <img className="icons" src={telegramIcon} alt="Telegram" />
            </a>
            <a href="mailto:6ejlo3epobnt@gmail.com">
              <img className="icons" src={emailIcon} alt="Email" />
            </a>
          </p>
        </div>
        <Link to="/about">
          <button className="button-27">About me</button>
        </Link>
        <Link to="/projects">
          <button className="button-27">Projects</button>
        </Link>
        <Link to="/comic">
          <button className="button-27">Comic</button>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
