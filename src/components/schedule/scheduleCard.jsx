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

const TextWrapper = styled.div`
  margin: auto;
  width: 80%;
  height: 100%;
  text-align: center;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const Title = styled.p`
  margin-top: auto;
  margin-bottom: 0;
  font-size: 0.85rem;

  :only-child {
    margin: auto;
  }
`;

const NoBr = styled.span`
  white-space: nowrap;
`;

const Text = styled.p`
  margin-top: 0;
  margin-bottom: auto;
  font-size: 0.7rem;
`;

const ScheduleCard = ({
  data,
  style,
  color,
  showX,
  handleXClick,
  handleClick,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  let name = getName(data);
  if (data && data.component !== "LEC") name = `*${data.component}* ${name}`;
  const nameParts = name.split(" ");
  const temp = data.temp;
  const classes = temp ? "opaque" : "";

  let instructor_name = "";
  if (data.instructor && data.instructor.name) {
    const parts = data.instructor.name.split(" ");
    const lastName = parts.slice(-1)[0];
    instructor_name = lastName;
  }

  return (
    <Card
      style={{ ...style, borderColor: color }}
      onMouseEnter={() => handleMouseEnter(data)}
      onMouseLeave={() => handleMouseLeave(data)}
      onClick={() => handleClick(data)}
      className={classes}
    >
      <CardBody>
        {showX && <XButton onClick={() => handleXClick(data)}>x</XButton>}
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
          {instructor_name && <Text>{instructor_name}</Text>}
        </TextWrapper>
      </CardBody>
    </Card>
  );
};

export default React.memo(ScheduleCard);
