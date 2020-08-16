import { parseTime2Minutes, parseMeetingDays } from "./parseUtils";
import { DEFAULT_DAYS, ADDITIONAL_DAYS } from "./../configs";

const hasValidDateTime = ({ meeting_days, start_time, end_time }) => {
  if (!meeting_days || !start_time || !end_time) return false;

  const diff = parseTime2Minutes(end_time) - parseTime2Minutes(start_time);
  if (diff <= 0) return false;

  const meetingDays = parseMeetingDays(meeting_days);
  const days = [...DEFAULT_DAYS, ...ADDITIONAL_DAYS];
  const validDays = meetingDays.filter((day) => days.includes(day));
  if (validDays.length === 0) return false;

  return true;
};

export { hasValidDateTime };
