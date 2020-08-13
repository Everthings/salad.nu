import React from "react";
import styled from "styled-components";
import { parseTime2Standard } from "../../utils/parseUtils";

const Content = styled.div`
  background-color: ${({ theme }) => `${theme.colors.modalBackground}`};
  height: 100%;
  overflow: auto;
`;

const Heading = styled.div`
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  background-color: rgba(243, 235, 245, 1);
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const HeadingText = styled.h2`
  color: ${({ theme }) => `${theme.colors.modalTitle}`};
  margin: auto;
  flex: 1;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Button = styled.button`
  max-width: 100px;
  margin: 0.5rem;
  padding: 0.3rem;
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
  handleRemove,
  name,
  title,
  instructor,
  room,
  mode,
  start_time,
  end_time,
  course_descriptions,
  removable,
}) => {
  return (
    <Content>
      <Heading>
        <HeadingText>{name}</HeadingText>
        <ButtonsContainer>
          {removable && (
            <Button
              className="btn btn-outline-danger"
              onClick={handleRemove}
              data-testid="remove-button"
            >
              Remove
            </Button>
          )}
          <Button className="btn btn-outline-secondary" onClick={handleExit}>
            Exit
          </Button>
        </ButtonsContainer>
      </Heading>
      <Body>
        {title && (
          <Info>
            <NameText>Title</NameText>
            <DescriptionText>{title}</DescriptionText>
          </Info>
        )}
        {instructor && instructor.name && (
          <Info>
            <NameText>Teacher</NameText>
            <DescriptionText>{instructor.name}</DescriptionText>
          </Info>
        )}
        {start_time && end_time && (
          <Info>
            <NameText>Time Slot</NameText>
            <DescriptionText>
              {`${parseTime2Standard(start_time)} - ${parseTime2Standard(
                end_time
              )}`}
            </DescriptionText>
          </Info>
        )}
        {room && room.building_name && (
          <Info>
            <NameText>Location</NameText>
            <DescriptionText>{room.building_name}</DescriptionText>
          </Info>
        )}
        {mode && (
          <Info>
            <NameText>Mode</NameText>
            <DescriptionText>{mode}</DescriptionText>
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
