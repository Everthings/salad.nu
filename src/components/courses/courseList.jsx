import React from "react";
import { useSelector } from "react-redux";
import CourseCard from "./courseCard";
import { getCourses } from "../../store/slices/courses";
import { MIN_SEARCH_LENGTH } from "./../../configs";
import CardList from "./cardList";
import { useMediaQuery } from "react-responsive";

const CourseList = ({ search }) => {
  const courses = useSelector(getCourses());

  const shouldContinueTyping =
    search.length < MIN_SEARCH_LENGTH && search.length !== 0;

  const noResults = search.length >= MIN_SEARCH_LENGTH && courses.length === 0;

  const shouldDisplaySections =
    search.length >= MIN_SEARCH_LENGTH && courses.length > 0;

  const bigScreen = useMediaQuery({
    query: "(min-width: 992px)",
  });

  let containerClass = "salad-container-courses";
  if (!bigScreen) containerClass += "-tabs";

  return (
    <div className={`${containerClass} overflow-auto`}>
      {shouldContinueTyping && <center>Continue typing...</center>}
      {noResults && (
        <center>
          No Results{" "}
          <span role="img" aria-label="frown">
            🙁
          </span>
        </center>
      )}
      {shouldDisplaySections && (
        <CardList list={courses} Card={CourseCard} id={"unique_id"} />
      )}
    </div>
  );
};

export default CourseList;
