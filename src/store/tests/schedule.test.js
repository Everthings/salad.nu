import {
  addSectionToSchedule,
  removeSectionFromSchedule,
} from "./../actions/scheduleActions";
import { getScheduledSections } from "./../reducers/schedule";
import configureStore from "./../configureStore";

describe("scheduleSlice", () => {
  let store;

  beforeEach(() => {
    store = configureStore();
  });

  describe("addSectionToSchedule + getScheduledSections", () => {
    it("should add section to schedule", () => {
      store.dispatch(addSectionToSchedule({ title: 1 }));

      expect(getScheduledSections(store.getState())).toEqual([
        { title: 1, scheduled: true },
      ]);
    });

    it("should add mutiple sections to schedule", () => {
      store.dispatch(addSectionToSchedule({ title: 1 }));
      store.dispatch(addSectionToSchedule({ title: 2 }));
      store.dispatch(addSectionToSchedule({ title: 3 }));

      expect(getScheduledSections(store.getState())).toEqual([
        { title: 1, scheduled: true },
        { title: 2, scheduled: true },
        { title: 3, scheduled: true },
      ]);
    });
  });

  describe("removeSectionFromSchedule + getScheduledSections", () => {
    it("should not remove section if section does not exist", () => {
      store.dispatch(addSectionToSchedule({ unique_id: 1 }));
      store.dispatch(removeSectionFromSchedule(2));

      expect(getScheduledSections(store.getState())).toEqual([
        { unique_id: 1, scheduled: true },
      ]);
    });

    it("should remove section if section does exist", () => {
      store.dispatch(addSectionToSchedule({ unique_id: 1 }));
      store.dispatch(removeSectionFromSchedule(1));

      expect(getScheduledSections(store.getState())).toEqual([]);
    });

    it("should only remove matching section if multiple sections in list", () => {
      store.dispatch(addSectionToSchedule({ unique_id: 1 }));
      store.dispatch(addSectionToSchedule({ unique_id: 2 }));
      store.dispatch(addSectionToSchedule({ unique_id: 3 }));
      store.dispatch(removeSectionFromSchedule(1));

      expect(getScheduledSections(store.getState())).toEqual([
        { unique_id: 2, scheduled: true },
        { unique_id: 3, scheduled: true },
      ]);
    });
  });
});
