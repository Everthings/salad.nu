const convertHour2Text = (hour) => {
  if (hour < 12) return `${hour} am`;
  else if (hour === 12) return `12 pm`;
  else return `${hour - 12} pm`;
};

export { convertHour2Text };
