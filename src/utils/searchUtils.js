import { getName, getFullName } from "./courseUtils";

const getParts = (str) => {
  const trimmed = str.trim();
  if (trimmed.length === 0) return [];
  const parts = trimmed.split(" ");
  const pruned = parts.filter((part) => part.length !== 0);
  return pruned;
};

const getMaximumPartLength = (parts) => {
  let maxLength = 0;
  for (const part of parts) {
    if (part.length > maxLength) maxLength = part.length;
  }
  return maxLength;
};

const getMaximumStrPartLength = (str) => {
  const parts = getParts(str);
  const maxLength = getMaximumPartLength(parts);
  return maxLength;
};

const strMatchesAllParts = (str, parts) => {
  for (const part of parts) {
    if (!str.includes(part)) return false;
  }
  return true;
};

const filterCoursesByStr = (searchStr, courses) => {
  const searchParts = getParts(searchStr.toLowerCase());

  const filterdCoursesName = [];
  const filterdCoursesTitle = [];
  for (const course of courses) {
    const courseName = getName(course).toLowerCase();
    const courseTitle = getFullName(course).toLowerCase();

    if (strMatchesAllParts(courseName, searchParts)) {
      filterdCoursesName.push(course);
    } else if (strMatchesAllParts(courseTitle, searchParts)) {
      filterdCoursesTitle.push(course);
    }
  }
  const filterdCourses = [...filterdCoursesName, ...filterdCoursesTitle];
  return filterdCourses;
};

const filterCoursesBySchoolSubject = (school, subject, courses) => {
  const filterdCourses = courses.filter(
    ({ school: sch, subject: sub }) =>
      (!school || sch === school) && (!subject || sub === subject)
  );
  return filterdCourses || [];
};

export {
  filterCoursesByStr,
  filterCoursesBySchoolSubject,
  getMaximumStrPartLength,
};
