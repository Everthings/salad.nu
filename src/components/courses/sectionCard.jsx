import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateSelectedSection,
  updateCurrentBuilding,
  clearCurrentBuilding,
  getSelectedCourse,
} from "./../../store/slices/search";
import { getScheduledCourses, addCourse } from "./../../store/slices/schedule";

const SectionCard = ({
  unique_id,
  instructor,
  section,
  meeting_days,
  start_time,
  end_time,
  room,
}) => {
  const dispatch = useDispatch();

  const handleEnter = () => {
    if (!room || !room.building_id) return;
    dispatch(updateCurrentBuilding(room.building_id));
  };

  const handleLeave = () => {
    dispatch(clearCurrentBuilding());
  };

  const handleClick = () => {
    dispatch(updateSelectedSection(unique_id, courseName));
  };

  const { name: courseName } = useSelector(getSelectedCourse);
  const courses = useSelector(getScheduledCourses);

  let classes = "card info-card section-card";
  const found = courses.some((course) => course.unique_id === unique_id);
  if (found) classes += " disabled";

  return (
    <div
      className={classes}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={handleClick}
    >
      <div className="card-body">
        <h5 className="card-title">{section}</h5>
        <hr />
        {instructor.name && <p className="card-text">{instructor.name} </p>}
        {meeting_days && <p className="card-text">{meeting_days}</p>}
        {start_time && end_time && (
          <p className="card-text">{`${start_time} - ${end_time}`}</p>
        )}
        {room && (
          <p className="card-text">{`${room.building_name} ${room.name}`}</p>
        )}
      </div>
    </div>
  );
};

export default SectionCard;
