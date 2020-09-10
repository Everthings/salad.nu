import React, { useMemo } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useToasts } from "react-toast-notifications";
import {
  getSections,
  isLoadingSections,
} from "./../../store/reducers/sections";
import {
  getDiscussions,
  isLoadingDiscussions,
} from "./../../store/reducers/discussions";
import {
  unselectCourse,
  hoverSectionCard,
  unhoverSectionCard,
} from "./../../store/actions/interactionActions";
import { addSectionToSchedule } from "./../../store/actions/scheduleActions";
import { showSectionInfo } from "./../../store/actions/interactionActions";
import { loadSections } from "../../store/actions/sectionActions";
import { loadDiscussions } from "../../store/actions/discussionActions";
import { getSelectedCourse } from "../../store/reducers/interactions";
import { getScheduledSections } from "./../../store/reducers/schedule";
import { parseTime2Standard } from "./../../utils/parseUtils";
import { getName } from "./../../utils/courseUtils";
import { hasValidDateTime } from "./../../utils/validationUtils";
import CardList from "./cardList";
import Loading from "./loading";

const Header = styled.div`
  margin-top: 1vh;
  opacity: 0.75;
`;

const ScrollContainer = styled.div`
  overflow: scroll;
  height: 100%;
  width: 100%;
`;

const Line = styled.hr`
  border-top: ${({ theme }) =>
    `4px dashed ${theme.colors.sectionsListDivider}`};
`;

const Button = styled.button`
  margin-left: 0.25rem;
  margin-top: 0.25rem;
  margin-bottom: 0.5rem;
`;

const Text = styled.h4`
  text-align: center;
  color: ${({ theme }) => `${theme.colors.sectionsListText}`};
`;

const SectionList = () => {
  const dispatch = useDispatch();
  const { addToast } = useToasts();

  const { id: courseId } = useSelector(getSelectedCourse);
  useMemo(() => {
    dispatch(loadSections(courseId));
    dispatch(loadDiscussions(courseId));
  }, [courseId, dispatch]);

  const loadingSections = useSelector(isLoadingSections);
  const loadingDiscussions = useSelector(isLoadingDiscussions);
  const loading = loadingSections || loadingDiscussions;

  const sections = useSelector(getSections);
  const discussions = useSelector(getDiscussions);
  const results = [...sections, ...discussions];

  const scheduledSections = useSelector(getScheduledSections);

  const name = sections.length > 0 ? getName(sections[0]) : "";

  const handleMouseOver = ({ unique_id, room }) => {
    dispatch(hoverSectionCard(unique_id, room));
  };

  const handleMouseLeave = () => {
    dispatch(unhoverSectionCard());
  };

  const handleClick = (section) => {
    dispatch(addSectionToSchedule(section));

    addToast(`Added ${name}`, {
      appearance: "success",
      autoDismiss: true,
    });
  };

  const sectionFn = ({ component, section }) => {
    if (component !== "LEC") return `${component} - ${section}`;
    return section;
  };
  const instructorFn = ({ instructor }) => {
    if (instructor) return instructor.name;
    return "";
  };
  const meetingDaysFn = ({ meeting_days }) => meeting_days;
  const meetingTimesFn = ({ start_time, end_time }) => {
    if (!start_time || !end_time) return "";

    return `${parseTime2Standard(start_time)} - ${parseTime2Standard(
      end_time
    )}`;
  };
  const roomFn = ({ room }) =>
    room && room.building_name && room.building_name !== "Online"
      ? room.building_name
      : "";
  const modeFn = ({ mode }) => (mode ? mode : "");
  const disabledFn = ({ unique_id, start_time, end_time, meeting_days }) => {
    const found = scheduledSections.some(
      (course) => course.unique_id === unique_id
    );
    if (found) return "already added";

    const hasTimes = start_time && end_time && meeting_days;
    if (!hasTimes) return "no specified time";

    const isValid = hasValidDateTime({ start_time, end_time, meeting_days });
    if (!isValid) return "date/time not valid";

    return null;
  };

  const showMoreInfo = ({ course_descriptions }) =>
    course_descriptions && course_descriptions.length > 0;

  const moreInfoClick = (sectionInfo) => {
    dispatch(showSectionInfo(sectionInfo));
  };

  return (
    <ScrollContainer data-testid="section-list">
      {loading && <Loading />}
      {!loading && (
        <>
          <Header>
            <Button
              className="btn btn-danger"
              onClick={() => dispatch(unselectCourse())}
              data-testid="section-list-back-button"
            >
              Back
            </Button>
            <Text data-testid="section-list-title">{name}</Text>
            <Line />
          </Header>
          <CardList
            list={results}
            idKey={"unique_id"}
            titleFn={sectionFn}
            textFns={[
              meetingDaysFn,
              meetingTimesFn,
              instructorFn,
              roomFn,
              modeFn,
            ]}
            disabledFn={disabledFn}
            handleClick={handleClick}
            handleMouseOver={handleMouseOver}
            handleMouseLeave={handleMouseLeave}
            showMoreInfoFn={showMoreInfo}
            moreInfoClick={moreInfoClick}
          />
        </>
      )}
    </ScrollContainer>
  );
};

export default SectionList;
