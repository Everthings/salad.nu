import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSections } from "../../store/slices/sections";
import SectionCard from "./sectionCard";
import { clearSelectedCourse } from "../../store/slices/search";
import CardList from "./cardList";

const SectionList = ({ selectedCourse }) => {
  const dispatch = useDispatch();

  const sections = useSelector(getSections());

  return (
    <div className="salad-container-courses overflow-auto">
      {
        <div className="sections-list-header">
          <button
            className="btn btn-danger back-btn"
            onClick={() => dispatch(clearSelectedCourse())}
          >
            Back
          </button>
          <h4>
            <center>{selectedCourse.name}</center>
          </h4>
          <hr />
        </div>
      }
      <CardList list={sections} Card={SectionCard} id={"unique_id"} />
    </div>
  );
};

export default SectionList;
