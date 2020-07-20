import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateSelectedSection,
  updateCurrentBuilding,
  clearCurrentBuilding,
  getSelectedCourse,
} from "./../../store/slices/search";

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

  const { name: courseName } = useSelector(getSelectedCourse);

  return (
    <React.Fragment>
      <div
        className="card info-card section-card"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onClick={() => dispatch(updateSelectedSection(unique_id, courseName))}
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
    </React.Fragment>
  );
};

export default SectionCard;
