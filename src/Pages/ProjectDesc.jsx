import PropTypes from "prop-types";
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
            <img src={imageUrl} className="fixed-width-image" alt={title} />
          </div>
        )}
      </div>
    </Collapsible>
  );
}

// PropTypes validation
ProjectDesc.propTypes = {
  title: PropTypes.string.isRequired,
  descriptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  imageUrl: PropTypes.string,
  descriptionClass: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

// Default props
ProjectDesc.defaultProps = {
  descriptionClass: "description-ul",
  imageUrl: null,
};
