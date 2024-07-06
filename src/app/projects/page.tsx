import React from "react";
import Link from "next/link";
import styles from "../styles/projects.module.css";

const ProjectsPage: React.FC = () => {
  return (
    <div className={styles.mainDiv}>
      <ul style={{ padding: "5%", textAlign: "left" }}>
        <li>
          c# anonymous
          <Link href="https://github.com/essence-666/c-AnonBot">
            <a className="links" target="_blank" rel="noopener noreferrer">
              telegram-bot
            </a>
          </Link>
        </li>
        <li>
          python ask/answer
          <Link href="https://github.com/essence-666/flaskwebproject">
            <a className="links" target="_blank" rel="noopener noreferrer">
              web-site
            </a>
          </Link>
        </li>
        <li>
          python
          <Link href="https://github.com/essence-666/scrapperbottg">
            <a className="links" target="_blank" rel="noopener noreferrer">
              telegram-bot
            </a>
          </Link>
          schedulling parsing
        </li>
      </ul>
    </div>
  );
};

export default ProjectsPage;
