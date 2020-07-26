const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    const loadedState = JSON.parse(serializedState);
    return { entities: { schedule: loadedState } };
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.entities.schedule); // only save schedule
    localStorage.setItem("state", serializedState);
  } catch (err) {
    // Ignore write errors
  }
};

export { loadState, saveState };
