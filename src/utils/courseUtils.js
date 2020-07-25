const getName = (course) => {
  return `${course.subject} ${course.number}`;
};

const getFullName = (course) => {
  return `${course.subject} ${course.number} ${course.title}`;
};

export { getName, getFullName };
