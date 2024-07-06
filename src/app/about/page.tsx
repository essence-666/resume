import styles from "../styles/about.module.css";
import React from "react";

const AboutPage = () => {
  return (
    <div className={styles.mainDiv}>
      <ul className={styles.list}>
        <li>Belozerov Egor 18 yo</li>
        <li>Innopolis University Student 2023-2027 June</li>
        <li>
          stack: backend - C#/.net, ++, python (a little bit html, css, js, ts)
        </li>
        <li>linux native</li>
        <li>english b2 proficiency level</li>
        <li>in love with algorithms</li>
      </ul>
    </div>
  );
};

export default AboutPage;
