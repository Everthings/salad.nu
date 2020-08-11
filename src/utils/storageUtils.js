const loadState = () => {
  try {
    const serializedSchedule = localStorage.getItem("schedule");
    const serializedTheme = localStorage.getItem("theme");
    if (serializedSchedule === null || serializedTheme == null) {
      return undefined;
    }
    const loadedSchedule = JSON.parse(serializedSchedule);
    const loadedTheme = JSON.parse(serializedTheme);

    return {
      schedule: loadedSchedule,
      theme: loadedTheme,
    };
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedSchedule = JSON.stringify(state.schedule); // only save schedule
    const serializedTheme = JSON.stringify(state.theme); // and theme as well
    localStorage.setItem("schedule", serializedSchedule);
    localStorage.setItem("theme", serializedTheme);
  } catch (err) {
    // ignore write errors
  }
};

export { loadState, saveState };
