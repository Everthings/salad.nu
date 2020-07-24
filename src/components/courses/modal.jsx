import React from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";
import {
  getSelectedSection,
  clearSelectedSection,
} from "./../../store/slices/search";
import { getSection } from "./../../store/slices/sections";
import { addCourse } from "./../../store/slices/schedule";
import ModalBody from "./modalBody";

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

  const { sectionId: id, name } = useSelector(getSelectedSection);
  const section = useSelector(getSection(id));

  if (id !== -1 && !modalIsOpen) openModal();

  const handleAdd = () => {
    const sectionDetails = { name, ...section };
    dispatch(addCourse(sectionDetails));

    closeModal();

    addToast(`${name} Added!`, {
      appearance: "success",
      autoDismiss: true,
    });
  };

  const handleExit = closeModal;

  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
      {section && <ModalBody name={name} {...section} />}
      <div className="modal-buttons">
        <button className="btn btn-outline-secondary mr-3" onClick={handleExit}>
          Exit
        </button>

        <button className="btn btn-outline-success" onClick={handleAdd}>
          Add
        </button>
      </div>
    </Modal>
  );
};

export default CourseModal;
