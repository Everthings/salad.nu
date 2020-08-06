import { parseTime, parseTime2Minutes, parseMeetingDays } from "./parseUtils";
import { getColor } from "./colorUtils";
import { getName } from "./courseUtils";
import {
  DEFAULT_DAYS,
  ADDITIONAL_DAYS,
  DEFAULT_START_HOUR,
  DEFAULT_END_HOUR,
} from "./../configs";

const isOverlapping = (c1, c2) => {
  const c1End = parseTime2Minutes(c1.data.end_time);
  const c2Start = parseTime2Minutes(c2.data.start_time);
  return c1End > c2Start;
};

const aggregateBins = (bins) => {
  let list = [];
  for (const hourKey in bins) {
    const hour = bins[hourKey];
    list = [...list, ...hour];
  }
  return list;
};

const computeHours = (courses, defaultStartHour, defaultEndHour) => {
  let earliest = defaultStartHour;
  let latest = defaultEndHour;
  for (const course of courses) {
    const { start_time, end_time } = course;
    const startMinutes = parseTime2Minutes(start_time);
    const endMinutes = parseTime2Minutes(end_time);

    const startHour = Math.floor(startMinutes / 60);
    const endHour = Math.floor((endMinutes - 1) / 60) + 1;

    if (startHour < earliest) earliest = startHour;
    if (endHour > latest) latest = endHour;
  }

  const hours = [];
  for (let i = earliest; i <= latest; i++) {
    hours.push(i);
  }

  return hours;
};

const computeDays = (courses, defaultDays, additionalDays) => {
  const daysAdded = {};

  for (const course of courses) {
    const { meeting_days } = course;
    const meetingDays = parseMeetingDays(meeting_days);

    for (const day of meetingDays) {
      if (day && !daysAdded[day]) {
        daysAdded[day] = true;
      }
    }
  }

  const days = [...defaultDays];
  for (let i = 0; i < additionalDays.length; i++) {
    const day = additionalDays[i];
    if (daysAdded[day]) {
      days.push(day);
    }
  }

  return days;
};

const binCoursesToDays = (courses, days, hours) => {
  const bins = {};
  for (const day of days) {
    bins[day] = {};
    for (const hour of hours) {
      bins[day][hour] = [];
    }
  }

  for (const course of courses) {
    const { meeting_days, start_time } = course;
    const meetingDays = parseMeetingDays(meeting_days);
    const { hour } = parseTime(start_time);
    const color = getColor(getName(course));

    for (const day of meetingDays) {
      if (days.includes(day)) bins[day][hour].push({ data: course, color });
    }
  }

  for (const day of days) {
    for (const hour of hours) {
      bins[day][hour].sort((c1, c2) =>
        parseTime2Minutes(c1.data.start_time) >
        parseTime2Minutes(c2.data.start_time)
          ? 1
          : -1
      );
    }
  }

  return bins;
};

const getCollisionGroups = (hourBins) => {
  const courses = aggregateBins(hourBins);
  let collisionGroups = [];
  let group = [];
  for (const course of courses) {
    if (group.length === 0) group.push(course);
    else {
      let assigned = false;
      for (const member of group) {
        if (isOverlapping(member, course)) {
          assigned = true;
          break;
        }
      }

      if (assigned) group.push(course);
      else {
        collisionGroups.push(group);
        group = [course];
      }
    }
  }

  if (group.length !== 0) collisionGroups.push(group);

  return collisionGroups;
};

const getCollisionColumns = (collisionGroups) => {
  const collusionColumns = [];
  for (const group of collisionGroups) {
    const columns = [];
    for (const course of group) {
      if (columns.length === 0) columns.push([course]);
      else {
        let assigned = false;
        for (const column of columns) {
          if (!isOverlapping(column[column.length - 1], course)) {
            column.push(course);
            assigned = true;
            break;
          }
        }

        if (!assigned) columns.push([course]);
      }
    }
    collusionColumns.push(columns);
  }

  return collusionColumns;
};

const applyStyles = (collisionColumns) => {
  for (const columns of collisionColumns) {
    const n = columns.length;
    for (var i = 0; i < columns.length; i++) {
      const column = columns[i];
      for (const course of column) {
        const { start_time, end_time } = course.data;
        const { hour: startHour, minute: startMinutes } = parseTime(start_time);
        const { hour: endHour, minute: endMinutes } = parseTime(end_time);
        const startMinutesFrac = parseInt(startMinutes, 10) / 60;
        const start = startHour + startMinutesFrac;
        const end = endHour + endMinutes / 60;

        const offset = startMinutesFrac * 100;
        const height = (end - start) * 100;
        const width = 100 / n;
        const leftOffset = width * i;

        course.style = {
          position: "absolute",
          top: `calc(${offset}% - 1px)`,
          left: `${leftOffset}%`,
          height: `calc(${height}% + ${height}/100 * 2px)`,
          width: `${width}%`,
          zIndex: 1,
        };
      }
    }
  }
};

const binAndStyle = (courses) => {
  const days = computeDays(courses, DEFAULT_DAYS, ADDITIONAL_DAYS);
  const hours = computeHours(courses, DEFAULT_START_HOUR, DEFAULT_END_HOUR);
  const dayBins = binCoursesToDays(courses, days, hours);

  for (const day of days) {
    const groups = getCollisionGroups(dayBins[day]);
    const columns = getCollisionColumns(groups);
    applyStyles(columns);
  }

  return { bins: dayBins, days, hours };
};

export { binAndStyle };
