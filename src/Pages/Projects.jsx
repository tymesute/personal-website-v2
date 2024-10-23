import React, { useState } from "react";
import Collapsible from "react-collapsible";
import ProjectDesc from "./ProjectDesc";

export default function Projects() {
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);
  const [isOpen3, setIsOpen3] = useState(true);
  const [isOpen4, setIsOpen4] = useState(true);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  const experiences = [
    {
      title: "Backend Developer - SIX Network",
      descriptions: [
        "Developed a secure backend API for a blockchain application with NestJS and JWT tokens to enable user authentication and token verification.",
        "Built CRUD functions for  MongoDB integration, optimizing user data management and retrieval",
        "Utilized Docker for development, running MongoDB containers and connecting with MongoDB Compass",
        "Deployed the backend service to Google Cloud Run using Terraform, automating scalable infrastructure",
      ],
      imageUrl: "assets/sixnetwork.png",
      isOpen: isOpen1,
      setIsOpen: setIsOpen1,
    },
    {
      title: "Software Engineer - Agoda",
      descriptions: [
        "Developed an internal tool to automate review/QA processes for Git MR’s, ensuring necessary checks in Jira tickets",
        "Integrated a Slack bot with Jira using Python and Jira’s API for ticket management and automated responses.",
        "Migrated the bot from VM to PC, using Docker and container services, and updated it to GPT-4",
        "Secured credentials with Vault and ensured continuous functionality and interactions with Jira boards.",
      ],
      imageUrl: "assets/agoda.png",
      isOpen: isOpen2,
      setIsOpen: setIsOpen2,
    },
    {
      title: "iOS Software Engineer - Chulalongkorn University",
      descriptions: [
        "Worked on the frontend team for a medical diagnosis iOS application (cognitive screening test) to be used by hospitals in Thailand nationwide.",
        "Implemented UX/UI design from Figma to mobile interface with Swift/SwiftUI using MVVM",
        "Facilitated medical practitioners and doctors at King Chulalongkorn hospital to conduct field testing on over 15+ patients",
        "Participated in Agile development of project timelines, requirements design, documentation, and testing",
        <>
          Learn more{" "}
          <a
            href="https://aimet.tech/en/about-us/"
            style={{ textDecoration: "underline" }}
          >
            here
          </a>
        </>,
      ],
      imageUrl: "assets/chula.png",
      isOpen: isOpen3,
      setIsOpen: setIsOpen3,
    },
  ];

  const projects = [
    {
      title: "WithU",
      descriptions: [
        "Built and launched a mental health support IOS application on the Apple App Store",
        "Generated 194,000+ downloads at 4.6-star reviews—ranking #1 highest in ‘Medical’ category nationwide",
        "Collaborated with Apple Southeast Asia’s marketing team to improve user engagement on App Store",
        "Integrated visionOS support at Apple Vision Developer Lab in the New York City office",
        <>
          Download WithU on the App Store{" "}
          <a
            href="https://apps.apple.com/th/app/withu/id1634761458"
            style={{ textDecoration: "underline" }}
          >
            here
          </a>
        </>,
      ],
      imageUrl: "assets/withulogo.png",
      isOpen: isOpen4,
      setIsOpen: setIsOpen4,
    },
    {
      title: "Covid19TH",
      descriptions: [
        "Developed a COVID-19 case tracker app monitoring infected, recovered, hospitalized, and death rates in Thailand",
        "Optimized JSON data from the Ministry of Public Health of Thailand’s public API into live dashboards",
        "Won semi-finalist award at Thailand’s National Software Contest (NSC) 2021",
        <>
          Github:{" "}
          <a
            href="https://github.com/Tymeee/Covid19TH"
            style={{ textDecoration: "underline" }}
          >
            link
          </a>
        </>,
      ],
      imageUrl: "assets/covid19th.png",
      isOpen: isOpen5,
      setIsOpen: setIsOpen5,
    },
    {
      title: "Google Public Message Board",
      descriptions: [
        "Designed and developed a live public message board for a university Computer Science club",
        "Integrated Google user authentication utilizing Cloud Firestore and back-end with Firebase",
        "Implemented a banning feature for the usage of profanity through a profanity-filter API",
        <>
          Github:{" "}
          <a
            href="https://github.com/Tymeee/code4community"
            style={{ textDecoration: "underline" }}
          >
            link
          </a>
        </>,
      ],
      descriptionClass: "description-ul-full",
      isOpen: isOpen6,
      setIsOpen: setIsOpen6,
    },
  ];

  return (
    <div>
      <h1 id="projects" className="heading-style">
        Experience/Projects{" "}
      </h1>
      <p style={{ marginBottom: "10px", fontStyle: "italic" }}>Experience</p>

      <div>
        {experiences.map((experience, index) => (
          <ProjectDesc
            key={index}
            title={experience.title}
            descriptions={experience.descriptions}
            imageUrl={experience.imageUrl}
            isOpen={experience.isOpen}
            setIsOpen={experience.setIsOpen}
          />
        ))}
      </div>

      <p style={{ marginBottom: "10px", fontStyle: "italic" }}>Projects</p>

      <div>
        {projects.map((project, index) => (
          <ProjectDesc
            key={index}
            title={project.title}
            descriptions={project.descriptions}
            imageUrl={project.imageUrl}
            descriptionClass={project.descriptionClass}
            isOpen={project.isOpen}
            setIsOpen={project.setIsOpen}
          />
        ))}
      </div>
    </div>
  );
}
