import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { removeCourse } from "../../store/slices/schedule";
import {
  updateHoveredCourse,
  getHoveredCourse,
  updateCurrentBuilding,
  clearCurrentBuilding,
  updateSelectedSection,
} from "../../store/slices/search";
import { getName } from "../../utils/courseUtils";
import { clearHoveredCourse } from "./../../store/slices/search";
import { useToasts } from "react-toast-notifications";

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
  top: 0;
  right: 0;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
  font-size: 10pt;
  z-index: 1;
`;

const Text = styled.p`
  font-size: 0.8rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 80%;
`;

const ScheduleCard = ({ data, style, color }) => {
  const dispatch = useDispatch();
  const { addToast } = useToasts();

  const { id } = useSelector(getHoveredCourse);
  const showDelete = data.unique_id === id;

  const name = getName(data);
  const temp = data.temp;
  const classes = temp ? "opaque" : "";

  const handleXClick = (e) => {
    e.stopPropagation();

    dispatch(removeCourse(data.unique_id));
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
        <Text>{name}</Text>
      </CardBody>
    </Card>
  );
};

export default ScheduleCard;
