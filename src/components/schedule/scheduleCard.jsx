import React from "react";
import styled from "styled-components";
import { getName } from "../../utils/courseUtils";

const Card = styled.div`
  background: ${({ theme }) => `${theme.colors.scheduleCardBackground}`};
  color: ${({ theme }) => `${theme.colors.scheduleCardText}`};
  border: 2px solid;
  border-left: 7px solid;
  border-radius: 10px;
  height: 100%;
  width: 100%;
  cursor: pointer;
`;

const CardBody = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

const XButton = styled.button`
  position: absolute;
  top: -3px;
  right: -3px;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
  color: rgba(245, 99, 66, 50);
  font-size: 10pt;
  padding: 1px 6px;
  z-index: 1;
`;

const FlexContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextWrapper = styled.div`
  width: 80%;
  margin: auto;
  text-align: center;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow: scroll;
`;

const Title = styled.p`
  font-size: 0.85rem;
  margin: 0;

  :only-child {
    margin: auto;
  }
`;

const NoBr = styled.span`
  white-space: nowrap;
`;

const Text = styled.p`
  font-size: 0.7rem;
  margin: 0;
`;

const ScheduleCard = ({
  data,
  style,
  color,
  hovered,
  handleXClick,
  handleClick,
  handleMouseOver,
  handleMouseLeave,
}) => {
  const handleXClickStopProp = (e, data) => {
    e.stopPropagation();
    handleXClick(data);
  };

  let name = getName(data);
  if (data && data.component !== "LEC") name = `*${data.component}* ${name}`;
  const nameParts = name.split(" ");

  let instructor_name = "";
  if (data.instructor && data.instructor.name) {
    const parts = data.instructor.name.split(" ");
    const lastName = parts.slice(-1)[0];
    instructor_name = lastName;
  }

  const title = data.title;

  const classes = data.temp ? "opaque" : "";

  return (
    <Card
      style={{ ...style, borderColor: color }}
      onMouseOver={() => handleMouseOver(data)}
      onMouseLeave={() => handleMouseLeave(data)}
      onClick={() => handleClick(data)}
      className={classes}
      data-testid="schedule-card"
    >
      <CardBody>
        {hovered && (
          <XButton
            onClick={(e) => handleXClickStopProp(e, data)}
            data-testid="schedule-card-x-button"
          >
            x
          </XButton>
        )}
        <FlexContainer>
          <TextWrapper>
            <Title textBreakStrategy={"simple"}>
              {nameParts.map((txt) => {
                return (
                  <React.Fragment key={txt}>
                    <NoBr>{txt}</NoBr>
                    <span> </span>
                  </React.Fragment>
                );
              })}
            </Title>
            {title && (
              <Text>
                <i>{title}</i>
              </Text>
            )}
            {instructor_name && (
              <Text>
                <u>{instructor_name}</u>
              </Text>
            )}
          </TextWrapper>
        </FlexContainer>
      </CardBody>
    </Card>
  );
};

export default React.memo(ScheduleCard);
