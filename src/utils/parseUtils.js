const parseTime = (time) => {
  const [hourTxt, minuteTxt] = time.split(":");
  return { hour: parseInt(hourTxt, 10), minute: parseInt(minuteTxt, 10) };
};

const parseTime2Seconds = (time) => {
  const { hour, minute } = parseTime(time);
  return 60 * hour + minute;
};

export { parseTime, parseTime2Seconds };
