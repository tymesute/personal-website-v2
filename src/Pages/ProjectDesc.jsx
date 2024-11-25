import React from "react";
import Collapsible from "react-collapsible";

export default function ProjectDesc({
  title,
  descriptions,
  imageUrl,
  descriptionClass = "description-ul",
  isOpen,
  setIsOpen,
}) {
  return (
    <Collapsible
      className="toggle-header"
      trigger={
        <div onClick={() => setIsOpen(!isOpen)}>
          <span
            className={`${
              isOpen ? "toggle-button-transform" : "toggle-button"
            }`}
          ></span>

          {title}
        </div>
      }
      open={isOpen}
    >
      <div className="row">
        <ul className={descriptionClass}>
          {descriptions.map((description, index) => (
            <li key={index}>{description}</li>
          ))}
        </ul>
        {imageUrl && (
          <div className="image-container">
            <img src={imageUrl} className="fixed-width-image" />
          </div>
        )}
      </div>
    </Collapsible>
  );
}
