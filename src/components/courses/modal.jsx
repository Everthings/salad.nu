import React from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";
import {
  getSelectedSection,
  clearSelectedSection,
} from "./../../store/slices/search";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "1rem",
    border: "0.5rem solid purple",
  },
};

Modal.setAppElement(document.getElementById("root"));

const CourseModal = () => {
  const dispatch = useDispatch();
  const { addToast } = useToasts();

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
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
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div className="modal-container">
        <h2>Hello</h2>

        <p>I am a modal</p>
        <div>
          <button className="btn btn-secondary mr-2" onClick={closeModal}>
            Exit
          </button>

          <button
            className="btn btn-success"
            onClick={() =>
              addToast("Course added successfully!", {
                appearance: "success",
                autoDismiss: true,
              })
            }
          >
            Add
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CourseModal;
