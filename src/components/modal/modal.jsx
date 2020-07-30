import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSelectedSection,
  clearSelectedSection,
} from "./../../store/slices/interactions";
import { getName } from "./../../utils/courseUtils";
import Modal from "react-modal";
import ModalBody from "./modalBody";

Modal.setAppElement(document.getElementById("root"));

const style = {
  content: {
    top: "20%",
    left: "20%",
    transform: "translate(-10%, -10%)",
    borderRadius: "1rem",
    border: "0.5rem solid purple",
  },

  overlay: {
    zIndex: "3",
  },
};

const CourseModal = () => {
  const dispatch = useDispatch();

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

  return (
    <Modal style={style} isOpen={isOpen} onRequestClose={handleExit}>
      {section && <ModalBody name={name} {...section} />}
      <div>
        <button className="btn btn-outline-secondary" onClick={handleExit}>
          Exit
        </button>
      </div>
    </Modal>
  );
};

export default CourseModal;
