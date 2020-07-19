import React from "react";
import { useDispatch } from "react-redux";
import {
  updateCurrentBuilding,
  clearCurrentBuilding,
} from "./../../store/slices/search";

const SectionCard = ({
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

  return (
    <div
      className="card info-card section-card"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
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
