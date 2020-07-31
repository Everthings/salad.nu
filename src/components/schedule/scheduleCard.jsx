import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { removeSection } from "./../../store/slices/schedule";
import {
  getHoveredCourse,
  updateCurrentBuilding,
  clearCurrentBuilding,
  updateSelectedSection,
  updateHoveredCourse,
  clearHoveredCourse,
} from "../../store/slices/interactions";
import { getName } from "../../utils/courseUtils";

const Card = styled.div`
  background: rgb(237, 245, 239);
  border: 1px solid;
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

const Button = styled.button`
  position: absolute;
  top: -3px;
  right: -3px;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
  color: rgba(245, 99, 66, 50);
  font-size: 10pt;
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

const ScheduleCard = ({ data, style, color }) => {
  const dispatch = useDispatch();
  const { addToast } = useToasts();

  const { id } = useSelector(getHoveredCourse);
  const showDelete = data.unique_id === id;

  const handleXClick = (e) => {
    e.stopPropagation();

    dispatch(removeSection(data.unique_id));
    dispatch(clearHoveredCourse());

    addToast(`Removed ${name}`, {
      appearance: "error",
      autoDismiss: true,
    });
  };

  const handleClick = () => {
    dispatch(updateSelectedSection(data));
  };

  const handleMouseEnter = (room) => {
    dispatch(updateHoveredCourse(data.unique_id));

    if (!room || !room.building_id) return;
    dispatch(updateCurrentBuilding(room.building_id));
  };

  const handleMouseLeave = () => {
    dispatch(clearHoveredCourse());
    dispatch(clearCurrentBuilding());
  };

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
      onMouseEnter={() => handleMouseEnter(data.room)}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={classes}
    >
      <CardBody>
        {showDelete && <Button onClick={handleXClick}>x</Button>}
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

export default ScheduleCard;
