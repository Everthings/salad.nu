import React from "react";
import styled from "styled-components";

const NameText = styled.p`
  font-style: italic;
  margin-bottom: 0.5rem;
`;

const DescriptionText = styled.p`
  background-color: rgba(27, 31, 35, 0.05);
  border-radius: 6px;
  padding: 0.2em 0.4em;
`;

const ModalBody = ({ name, instructor, room, course_descriptions }) => {
  return (
    <React.Fragment>
      <h2>{name}</h2>
      {instructor && instructor.name && (
        <div>
          <NameText>Teacher</NameText>
          <DescriptionText>{instructor.name}</DescriptionText>
        </div>
      )}
      {room && room.building_name && (
        <div>
          <NameText>Location</NameText>
          <DescriptionText>{room.building_name}</DescriptionText>
        </div>
      )}
      {course_descriptions &&
        course_descriptions.map((description) => {
          return (
            <div key={description.name}>
              <NameText>{description.name}</NameText>
              <DescriptionText>{description.desc}</DescriptionText>
            </div>
          );
        })}
    </React.Fragment>
  );
};

export default ModalBody;
