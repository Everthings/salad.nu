const getName = (course) => {
  if (!course || !course.subject || !course.number) return "";
  return `${course.subject} ${course.number}`;
};

const getFullName = (course) => {
  if (!course || !course.subject || !course.number || !course.title) return "";
  return `${course.subject} ${course.number} ${course.title}`;
};

export { getName, getFullName };
