import { useState } from "react";

const constants = () => {
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(true);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  const experiences = [
    {
      title: "Software Engineer, Agoda (Booking Holdings)",
      descriptions: [
        "Developed an internal tool to automate review/QA processes for Git MR’s, ensuring necessary checks in Jira tickets",
        "Integrated a Slack bot with Jira using Python and Jira’s API for ticket management and automated responses.",
        "Migrated the bot from VM to PC, using Docker and container services, and updated it to GPT-4",
        "Secured credentials with Vault and ensured continuous functionality and interactions with Jira boards.",
      ],
      imageUrl: "./src/assets/agoda1.JPG",
      isOpen: isOpen1,
      setIsOpen: setIsOpen1,
    },
    {
      title: "iOS Software Engineer, Chulalongkorn University",
      descriptions: [
        "Worked on the frontend team for a medical diagnosis iOS application (cognitive screening test) to be used by hospitals in Thailand nationwide.",
        "Implemented UX/UI design from Figma to mobile interface with Swift/SwiftUI using MVVM",
        "Facilitated medical practitioners and doctors at King Chulalongkorn hospital to conduct field testing on over 40+ patients",
        "Participated in Agile development of project timelines, requirements design, documentation, and testing",
      ],
      imageUrl: "./src/assets/c2fit.jpg",
      isOpen: isOpen2,
      setIsOpen: setIsOpen2,
    },
  ];

  const projects = [
    {
      title: "WithU",
      descriptions: [
        "Built and launched a Thai mental health support IOS application on the Apple App Store",
        "Generated 164,000+ downloads at 4.7-star reviews—ranking #1 highest in ‘Medical’ category nationwide",
        "Collaborated with Apple Southeast Asia’s marketing team to improve user engagement on App Store",
        "Integrated visionOS support at Apple Vision Developer Lab in the New York City office",
        <>
          Download here:{" "}
          <a
            href="https://apps.apple.com/th/app/withu/id1634761458"
            style={{ textDecoration: "underline" }}
          >
            link
          </a>
        </>,
      ],
      imageUrl: "./src/assets/withulogo.png",
      isOpen: isOpen3,
      setIsOpen: setIsOpen3,
    },
    {
      title: "Google Public Message Board",
      descriptions: [
        "Designed and developed a live public message board for a university Computer Science club",
        "Integrated Google user authentication utilizing Cloud Firestore and back-end with Firebase",
        "Implemented a banning feature for the usage of profanity through a profanity-filter API",
      ],
      isOpen: isOpen4,
      setIsOpen: setIsOpen4,
    },
    {
      title: "DAO4DOGS",
      descriptions: [
        "Designed and developed a live public message board for a university Computer Science club",
        "Integrated Google user authentication utilizing Cloud Firestore and back-end with Firebase",
        "Implemented a banning feature for the usage of profanity through a profanity-filter API",
      ],
      isOpen: isOpen5,
      setIsOpen: setIsOpen5,
    },
  ];

  return { experiences, projects, isOpen6, setIsOpen6 };
};

export default constants;
