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
        <div style={{ width: "60%" }}>
          <p
            className="p-style"
            style={{
              paddingBottom: "10px",
            }}
          >
            I'm a rising sophomore from Bangkok, Thailand 🇹🇭 studying Computer
            Science at Northeastern University. I'm currently a software
            engineer intern at Agoda for Summer 2024. I love playing guitar,
            basketball, and going to the gym.
          </p>

          <div className="row-logo">
            <a
              id="insta-link"
              href="https://www.instagram.com/tymesute/"
              target="_blank"
            >
              <img
                src="./src/assets/instagram2.svg"
                alt="ig-logo"
                className="row-logo-img"
              />
              Instagram
            </a>
          </div>

          <div className="row-logo">
            <a
              id="linkedin-link"
              href="https://www.linkedin.com/in/tsuteesopon/"
              target="_blank"
            >
              <img
                src="./src/assets/linkedin.svg"
                alt="linkedin-logo"
                className="row-logo-img"
              />
              LinkedIn
            </a>
          </div>

          <div className="row-logo">
            <a
              id="github-link"
              href="https://github.com/Tymeee"
              target="_blank"
            >
              <img
                src="./src/assets/github.svg"
                alt="github-logo"
                className="row-logo-img"
              />
              Github
            </a>
          </div>
        </div>

        <img src={"./src/assets/tyme-pic2.png"} style={{ width: "38%" }} />
      </div>
    </div>
  );
}
