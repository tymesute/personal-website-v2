import React, { useState } from "react";
import Collapsible from "react-collapsible";

export default function Projects() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  return (
    <div>
      <h1 className="heading-style">💻 Projects/Experience</h1>
      <p style={{ marginBottom: "10px", fontStyle: "italic" }}>Experience</p>

      <Collapsible
        className="toggle-header"
        trigger={
          <div onClick={() => setIsOpen1(!isOpen1)}>
            <span
              className={`${
                isOpen1 ? "toggle-button-transform" : "toggle-button"
              }`}
            ></span>
            Software Engineer, Agoda (Booking Holdings)
          </div>
        }
        open={isOpen1}
      >
        {
          // make this into its own class
        }
        <div className="row">
          <ul style={{ width: "58%" }}>
            <li>
              Developed an internal tool to automate review/QA processes for Git
              MR’s, ensuring necessary checks in Jira tickets
            </li>
            <li>
              Integrated a Slack bot with Jira using Python and Jira’s API for
              ticket management and automated responses.
            </li>
            <li>
              Migrated the bot from VM to PC, using Docker and container
              services, and updated it to GPT-4o
            </li>
            <li>
              Secured credentials with Vault and ensured continuous
              functionality and interactions with Jira boards.
            </li>
          </ul>

          <div className="image-container">
            <img src="./src/assets/agoda1.JPG" className="fixed-width-image" />
          </div>
        </div>
      </Collapsible>

      <Collapsible
        className="toggle-header"
        trigger={
          <div onClick={() => setIsOpen2(!isOpen2)}>
            <span
              className={`${
                isOpen2 ? "toggle-button-transform" : "toggle-button"
              }`}
            ></span>
            iOS Software Engineer, Chulalongkorn University
          </div>
        }
        open={isOpen2}
      >
        <ul>
          <li>
            Worked on the frontend team for a medical diagnosis iOS application
            (cognitive screening test) to be used by hospitals in Thailand
            nationwide.
          </li>
          <li>
            Facilitated medical practitioners and doctors at King Chulalongkorn
            hospital to conduct field testing on over 40+ patients
          </li>
        </ul>
      </Collapsible>

      <p
        style={{ paddingTop: "5px", marginBottom: "10px", fontStyle: "italic" }}
      >
        Projects
      </p>
      <Collapsible
        className="toggle-header"
        trigger={
          <div onClick={() => setIsOpen3(!isOpen3)}>
            <span
              className={`${
                isOpen3 ? "toggle-button-transform" : "toggle-button"
              }`}
            ></span>
            WithU
          </div>
        }
        open={isOpen3}
      >
        <ul>
          <li>
            Worked on the frontend team for a medical diagnosis iOS application
            (cognitive screening test) to be used by hospitals in Thailand
            nationwide.
          </li>
          <li>
            Facilitated medical practitioners and doctors at King Chulalongkorn
            hospital to conduct field testing on over 40+ patients
          </li>
        </ul>
      </Collapsible>
      <Collapsible
        className="toggle-header"
        trigger={
          <div onClick={() => setIsOpen4(!isOpen4)}>
            <span
              className={`${
                isOpen4 ? "toggle-button-transform" : "toggle-button"
              }`}
            ></span>
            Google Chat Room
          </div>
        }
        open={isOpen4}
      >
        <ul>
          <li>
            Worked on the frontend team for a medical diagnosis iOS application
            (cognitive screening test) to be used by hospitals in Thailand
            nationwide.
          </li>
          <li>
            Facilitated medical practitioners and doctors at King Chulalongkorn
            hospital to conduct field testing on over 40+ patients
          </li>
        </ul>
      </Collapsible>
      <Collapsible
        className="toggle-header"
        trigger={
          <div onClick={() => setIsOpen5(!isOpen5)}>
            <span
              className={`${
                isOpen5 ? "toggle-button-transform" : "toggle-button"
              }`}
            ></span>
            DAO4DOGS
          </div>
        }
        open={isOpen5}
      >
        <ul>
          <li>
            Worked on the frontend team for a medical diagnosis iOS application
            (cognitive screening test) to be used by hospitals in Thailand
            nationwide.
          </li>
          <li>
            Facilitated medical practitioners and doctors at King Chulalongkorn
            hospital to conduct field testing on over 40+ patients
          </li>
        </ul>
      </Collapsible>
      <Collapsible
        className="toggle-header"
        trigger={
          <div onClick={() => setIsOpen6(!isOpen6)}>
            <span
              className={`${
                isOpen6 ? "toggle-button-transform" : "toggle-button"
              }`}
            ></span>
            Covid19TH
          </div>
        }
        open={isOpen6}
      >
        <ul>
          <li>
            Worked on the frontend team for a medical diagnosis iOS application
            (cognitive screening test) to be used by hospitals in Thailand
            nationwide.
          </li>
          <li>
            Facilitated medical practitioners and doctors at King Chulalongkorn
            hospital to conduct field testing on over 40+ patients
          </li>
        </ul>
      </Collapsible>
    </div>
  );
}
