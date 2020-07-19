import React from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import {
  getSelectedSection,
  clearSelectedSection,
} from "./../../store/slices/search";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement(document.getElementById("root"));

const CourseModal = () => {
  const dispatch = useDispatch();

  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    dispatch(clearSelectedSection());
    setIsOpen(false);
  }

  const { sectionId: id } = useSelector(getSelectedSection);
  if (id !== -1 && !modalIsOpen) openModal();

  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
      <div>I am a modal</div>
      <button onClick={closeModal}>close</button>
    </Modal>
  );
};

export default CourseModal;
