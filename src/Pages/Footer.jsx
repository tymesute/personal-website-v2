import React from "react";
import Contacts from "./Contacts";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="row">
        <p>&copy; 2024 Tyme Suteesopon. All rights reserved.</p>
        <a
          href="https://github.com/Tymeee/personal-website"
          style={{ display: "inline-block", paddingTop: "15px" }}
        >
          View Source
        </a>
      </div>
    </footer>
  );
}
