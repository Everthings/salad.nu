const splitTime = (time) => {
  const [hourTxt, minuteTxt] = time.split(":");
  return { hourTxt, minuteTxt };
};

const parseTime = (time) => {
  const { hourTxt, minuteTxt } = splitTime(time);
  return { hour: parseInt(hourTxt, 10), minute: parseInt(minuteTxt, 10) };
};

const parseTime2Minutes = (time) => {
  const { hour, minute } = parseTime(time);
  return 60 * hour + minute;
};

const parseTime2Standard = (time) => {
  const { hourTxt, minuteTxt } = splitTime(time);
  let suffix = "am";

  let hour = parseInt(hourTxt, 10);
  if (hour >= 12) {
    suffix = "pm";
    if (hour > 12) {
      hour -= 12;
    }
  }
  return `${hour}:${minuteTxt}${suffix}`;
};

const parseMeetingDays = (meetingDays) => {
  if (meetingDays === "") return [];
  return meetingDays.split(/(?=[A-Z])/);
};

export { parseTime, parseTime2Minutes, parseTime2Standard, parseMeetingDays };
