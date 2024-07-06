import React, { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles/layot.module.css";
import gitIcon from "./media/git.svg";
import leetcodeIcon from "./media/leetcode.png";
import telegramIcon from "./media/Telegram_logo.svg.webp";
import emailIcon from "./media/281769.png";
import backVideo from "./media/Bite_Rain_R.mp4";
import "./globals.css";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <html>
      <head>
        <title>My Next.js App</title>
      </head>
      <body>
        <header>
          <nav>
            <Link href="/" passHref>
              <button className={styles.button86}>Home Page</button>
            </Link>
            <Link href="/about" passHref>
              <button className={styles.button86}>About</button>
            </Link>
            <Link href="/projects" passHref>
              <button className={styles.button86}>Projects</button>
            </Link>
            <Link href="/comic" passHref>
              <button className={styles.button86}>Funny Comic</button>
            </Link>
          </nav>
        </header>
        <main>{children}</main>

        <footer>
          <a
            href="https://github.com/essence-666"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={gitIcon} alt="GitHub" width={50} height={50} />
          </a>
          <a
            href="https://leetcode.com/u/essence-/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={leetcodeIcon} alt="LeetCode" width={50} height={50} />
          </a>
          <a
            href="https://t.me/againlose"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={telegramIcon} alt="Telegram" width={50} height={50} />
          </a>
          <a href="mailto:6ejlo3epobnt@gmail.com">
            <Image src={emailIcon} alt="Email" width={50} height={50} />
          </a>{" "}
        </footer>
      </body>
    </html>
  );
};

export default Layout;
