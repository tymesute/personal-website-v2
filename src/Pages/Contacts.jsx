export default function Contacts() {
  return (
    <div>
      <h1 id="contact" className="heading-style">
        Contact
      </h1>
      <p>Let's get in touch!</p>
      <div className="row-logo">
        <a
          id="insta-link"
          href="https://www.instagram.com/tymesute/"
          target="_blank"
        >
          <img
            src="src/assets/instagram2.svg"
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
            src="src/assets/linkedin.svg"
            alt="linkedin-logo"
            className="row-logo-img"
          />
          LinkedIn
        </a>
      </div>

      <div className="row-logo">
        <a id="github-link" href="https://github.com/Tymeee" target="_blank">
          <img
            src="src/assets/github.svg"
            alt="github-logo"
            className="row-logo-img"
          />
          Github
        </a>
      </div>
    </div>
  );
}
