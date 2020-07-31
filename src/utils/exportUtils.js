import moment from "moment";
import { parseMeetingDays } from "./parseUtils";
import { getName } from "./courseUtils";

const columns = [
  "Subject",
  "Start Date",
  "Start Time",
  "End Date",
  "End Time",
  "Location",
];

const convertDay2Dow = (day) => {
  switch (day) {
    case "Su":
      return 0;
    case "Mo":
      return 1;
    case "Tu":
      return 2;
    case "We":
      return 3;
    case "Th":
      return 4;
    case "Fr":
      return 5;
    case "Sa":
      return 6;
    default:
      return -1;
  }
};

const convertSection2CSV = (section) => {
  const { start_time, end_time, start_date, end_date, meeting_days } = section;
  if (!start_time || !end_time || !start_date || !end_date || !meeting_days)
    return [];

  const csvData = [];

  const meetingDays = parseMeetingDays(meeting_days);
  const startDate = moment(start_date);
  const startDow = startDate.day();
  const endDate = moment(end_date);

  for (const day of meetingDays) {
    const dow = convertDay2Dow(day);
    if (dow === -1) continue;

    let diff = dow - startDow;
    if (diff < 0) diff += 7;
    const current = startDate.clone().add(diff, "days");

    while (current.isSameOrBefore(endDate)) {
      const datum = [
        getName(section),
        current.format("MM-DD-YYYY"),
        start_time,
        current.format("MM-DD-YYYY"),
        end_time,
        "",
      ];
      if (section.room && section.room.building_name)
        datum[5] = section.room.building_name;
      csvData.push(datum);

      current.add(7, "days");
    }
  }

  return csvData;
};

const exportSchedule2CSV = (scheduleList) => {
  let csvData = [columns];
  for (const section of scheduleList) {
    const sectionCsvData = convertSection2CSV(section);

    if (sectionCsvData.length !== 0) csvData = [...csvData, ...sectionCsvData];
  }

  return csvData;
};

const getColumns = () => {
  return columns;
};

export { getColumns, exportSchedule2CSV };
