import React from "react";
import styled from "styled-components";

const Content = styled.div`
  background-color: ${({ theme }) => `${theme.colors.modalBackground}`};
  height: 100%;
  overflow: auto;
`;

const Heading = styled.div`
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
  color: ${({ theme }) => `${theme.colors.modalTitle}`};
  margin: 0px;
`;

const Body = styled.div`
  margin: 20px;
  margin-top: 5px;
`;

const Info = styled.div`
  color: ${({ theme }) => `${theme.colors.modalText}`};
  height: 100%;
`;

const NameText = styled.p`
  font-style: italic;
  margin-bottom: 0.5rem;
`;

const DescriptionText = styled.p`
  background-color: ${({ theme }) => `${theme.colors.modalTextBox}`};
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
    <Content>
      <Heading>
        <HeadingText>{name}</HeadingText>
        <button className="btn btn-outline-secondary" onClick={handleExit}>
          Exit
        </button>
      </Heading>
      <Body>
        {instructor && instructor.name && (
          <Info>
            <NameText>Teacher</NameText>
            <DescriptionText>{instructor.name}</DescriptionText>
          </Info>
        )}
        {room && room.building_name && (
          <Info>
            <NameText>Location</NameText>
            <DescriptionText>{room.building_name}</DescriptionText>
          </Info>
        )}
        {course_descriptions &&
          course_descriptions.map((description) => {
            return (
              <Info key={description.name}>
                <NameText>{description.name}</NameText>
                <DescriptionText>{description.desc}</DescriptionText>
              </Info>
            );
          })}
      </Body>
    </Content>
  );
};

export default React.memo(ModalContent);
