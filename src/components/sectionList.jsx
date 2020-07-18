import React from "react";
import { useSelector } from "react-redux";
import { getSections } from "../store/sections";
import SectionCard from "./sectionCard";

const SectionList = () => {
  const sections = useSelector(getSections());

  return (
    <React.Fragment>
      {sections.map((section) => {
        return <SectionCard key={section.section} {...section} />;
      })}
    </React.Fragment>
  );
};

export default SectionList;
