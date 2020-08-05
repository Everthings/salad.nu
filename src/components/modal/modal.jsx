import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";
import {
  getSelectedSection,
  clearSelectedSection,
  clearHoveredCourse,
  clearCurrentBuilding,
} from "./../../store/slices/interactions";
import { getName } from "./../../utils/courseUtils";
import Modal from "react-modal";
import ModalContent from "./modalContent";
import { removeSection } from "../../store/slices/schedule";

Modal.setAppElement(document.getElementById("root"));

const style = {
  content: {
    top: "20%",
    left: "20%",
    transform: "translate(-10%, -10%)",
    borderRadius: "1rem",
    border: "0.5rem solid purple",
    padding: "0",
  },

  overlay: {
    zIndex: "3",
  },
};

const CourseModal = () => {
  const dispatch = useDispatch();
  const { addToast } = useToasts();

  const { info: section } = useSelector(getSelectedSection);
  let name = "";
  let isOpen = false;
  if (section) {
    name = getName(section);
    isOpen = true;
  }

  const handleExit = () => {
    dispatch(clearSelectedSection());
  };

  const handleRemove = () => {
    dispatch(removeSection(section.unique_id));
    dispatch(clearHoveredCourse());
    dispatch(clearCurrentBuilding());
    handleExit();

    addToast(`Removed ${name}`, {
      appearance: "error",
      autoDismiss: true,
    });
  };

  return (
    <Modal style={style} isOpen={isOpen} onRequestClose={handleExit}>
      {section && (
        <ModalContent
          name={name}
          {...section}
          handleExit={handleExit}
          handleRemove={handleRemove}
        />
      )}
    </Modal>
  );
};

export default CourseModal;
