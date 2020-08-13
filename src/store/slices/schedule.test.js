import { addSection, removeSection, getScheduledSections } from "./schedule";
import configureStore from "./../configureStore";

describe("scheduleSlice", () => {
  let store;

  const scheduleSlice = () => store.getState().schedule;

  beforeEach(() => {
    store = configureStore();
  });

  describe("addSection", () => {
    it("should add section to schedule", () => {
      store.dispatch(addSection({ title: 1 }));

      expect(scheduleSlice().list).toEqual([{ title: 1 }]);
    });

    it("should add mutiple sections to schedule", () => {
      store.dispatch(addSection({ title: 1 }));
      store.dispatch(addSection({ title: 2 }));
      store.dispatch(addSection({ title: 3 }));

      expect(scheduleSlice().list).toEqual([
        { title: 1 },
        { title: 2 },
        { title: 3 },
      ]);
    });
  });

  describe("removeSection", () => {
    it("should not remove section if section does not exist", () => {
      store.dispatch(addSection({ unique_id: 1 }));
      store.dispatch(removeSection(2));

      expect(scheduleSlice().list).toEqual([{ unique_id: 1 }]);
    });

    it("should remove section if section does exist", () => {
      store.dispatch(addSection({ unique_id: 1 }));
      store.dispatch(removeSection(1));

      expect(scheduleSlice().list).toEqual([]);
    });

    it("should only remove matching section if multiple sections in list", () => {
      store.dispatch(addSection({ unique_id: 1 }));
      store.dispatch(addSection({ unique_id: 2 }));
      store.dispatch(addSection({ unique_id: 3 }));
      store.dispatch(removeSection(1));

      expect(scheduleSlice().list).toEqual([
        { unique_id: 2 },
        { unique_id: 3 },
      ]);
    });
  });

  describe("getScheduledSections", () => {
    it("should get empty list if no sections in schedule", () => {
      const state = {
        schedule: { list: [] },
      };

      const schedule = getScheduledSections(state);

      expect(schedule).toEqual([]);
    });

    it("should get correct schedule list", () => {
      const state = {
        schedule: { list: [{ title: "1" }, { title: "2" }, { title: "3" }] },
      };

      const schedule = getScheduledSections(state);

      expect(schedule).toEqual(state.schedule.list);
    });
  });
});
