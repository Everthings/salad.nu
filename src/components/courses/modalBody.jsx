import React from "react";

const ModalBody = ({ name, course_descriptions }) => {
  return (
    <React.Fragment>
      <h2>{name}</h2>

      {course_descriptions.map((description) => {
        return (
          <div key={description.name}>
            <i className="modal-description-name">{description.name}</i>
            <p className="modal-description-desc">{description.desc}</p>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default ModalBody;
