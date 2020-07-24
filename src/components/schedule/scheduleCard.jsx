import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCourse } from "../../store/slices/schedule";
import {
  updateHoveredCourse,
  getHoveredCourse,
} from "../../store/slices/search";
import { clearHoveredCourse } from "./../../store/slices/search";
import { useToasts } from "react-toast-notifications";

const ScheduleCard = ({ data, style, color }) => {
  const dispatch = useDispatch();
  const { addToast } = useToasts();

  const { id } = useSelector(getHoveredCourse);
  const showDelete = data.unique_id === id;

  const handleClick = () => {
    dispatch(removeCourse(data.unique_id));

    addToast(`${data.name} Removed!`, {
      appearance: "error",
      autoDismiss: true,
    });
  };

  const handleMouseEnter = () => {
    dispatch(updateHoveredCourse(data.unique_id));
  };

  const handleMouseLeave = () => {
    dispatch(clearHoveredCourse());
  };

  return (
    <div
      className="card text-center schedule-card"
      style={{ ...style, borderColor: color }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className="schedule-card-body">
        {showDelete && <button className="schedule-x-button">x</button>}
        <p className="card-title">{data.name}</p>
      </div>
    </div>
  );
};

export default ScheduleCard;
