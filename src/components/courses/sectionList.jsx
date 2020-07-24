import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSections } from "../../store/slices/sections";
import { clearSelectedCourse } from "../../store/slices/search";
import CardList from "./cardList";
import SectionCard from "./sectionCard";
import CourseModal from "./modal";

const SectionList = ({ selectedCourse }) => {
  const dispatch = useDispatch();

  const sections = useSelector(getSections());

  const handleClick = () => {
    dispatch(clearSelectedCourse());
  };

  return (
    <div className="salad-container-courses overflow-auto">
      {
        <div className="sections-list-header">
          <button className="btn btn-danger back-btn" onClick={handleClick}>
            Back
          </button>
          <h4>
            <center>{selectedCourse.name}</center>
          </h4>
          <hr />
        </div>
      }
      <CardList list={sections} Card={SectionCard} id={"unique_id"} />
      <CourseModal />
    </div>
  );
};

export default SectionList;
