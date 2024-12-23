import linkedinLogo from "/src/assets/linkedin.svg";
import instagramLogo from "/src/assets/instagram2.svg";
import githubLogo from "/Users/tymesuteesopon/personal-website-v2/src/assets/github.svg";

export default function Contacts() {
  return (
    <div>
      <h1 id="contact" className="heading-style">
        Contact
      </h1>
      <p>Let&apos;s get in touchhhhhhhhhhhh!</p>

      <div className="row-logo">
        <a
          id="insta-link"
          href="https://www.instagram.com/tymesute/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={instagramLogo}
            alt="Instagram logo"
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
          rel="noreferrer"
        >
          <img
            src={linkedinLogo}
            alt="LinkedIn logo"
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
          rel="noreferrer"
        >
          <img src={githubLogo} alt="GitHub logo" className="row-logo-img" />
          Github
        </a>
      </div>
    </div>
  );
}
