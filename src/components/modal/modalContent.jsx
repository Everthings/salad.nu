import React from "react";
import styled from "styled-components";

const Title = styled.div`
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgba(243, 235, 245, 1);
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
`;

const HeadingText = styled.h2`
  margin: 0px;
`;

const Body = styled.div`
  margin: 20px;
  margin-top: 5px;
`;

const NameText = styled.p`
  font-style: italic;
  margin-bottom: 0.5rem;
`;

const DescriptionText = styled.p`
  background-color: rgba(27, 31, 35, 0.05);
  border-radius: 6px;
  padding: 0.2em 0.4em;
`;

const ModalContent = ({
  handleExit,
  name,
  instructor,
  room,
  course_descriptions,
}) => {
  return (
    <React.Fragment>
      <Title>
        <HeadingText>{name}</HeadingText>
        <button className="btn btn-outline-secondary" onClick={handleExit}>
          Exit
        </button>
      </Title>
      <Body>
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
      </Body>
    </React.Fragment>
  );
};

export default React.memo(ModalContent);
