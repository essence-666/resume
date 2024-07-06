import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles/mainpage.module.css";
import mob from "./media/mob.png";

const HomePage = () => (
  <div>
    <div id="core" className={styles.mainDiv}>
      <div className={styles.imageContainer}>
        <Image src={mob} alt="Your Alt Text" className={styles.mob} />
        <p>
          Hi! I am a first-year undergraduate student at Innopolis University
        </p>
      </div>
    </div>
  </div>
);

export default HomePage;
