import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Content() {
  const [text] = useTypewriter({
    words: ["Hello,", "สวัสดีครับ"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div className="content">
      <h1 className="heading-style">
        <span>{text}</span>
        <span>
          <Cursor cursorStyle="|" />
        </span>
        {""}I'm Tyme 👋
      </h1>

      <div className="row">
        <div style={{ width: "55%" }}>
          <p
            style={{
              fontWeight: 400,
              margin: "0",
              lineHeight: "1.5em",
              paddingBottom: "5px",
            }}
          >
            I'm a rising sophomore from Bangkok, Thailand 🇹🇭 studying Computer
            Science at Northeastern University. I'm curretly a software engineer
            intern at Agoda for Summer 2024.
          </p>

          <div className="row-logo">
            <img
              src="./src/assets/instagram2.svg"
              alt="ig-logo"
              className="row-logo-img"
            />
            <a
              id="insta-link"
              href="https://www.instagram.com/tymesute/"
              target="_blank"
            >
              Instagram
            </a>
          </div>

          <div className="row-logo">
            <img
              src="./src/assets/linkedin.svg"
              alt="linkedin-logo"
              className="row-logo-img"
            />
            <a
              id="linkedin-link"
              href="https://www.linkedin.com/in/tsuteesopon/"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>

          <div className="row-logo">
            <img
              src="./src/assets/github.svg"
              alt="github-logo"
              className="row-logo-img"
            />
            <a
              id="github-link"
              href="https://github.com/Tymeee"
              target="_blank"
            >
              Github
            </a>
          </div>
        </div>

        <img src={"./src/assets/tyme-pic2.png"} style={{ width: "42%" }} />
      </div>
    </div>
  );
}
