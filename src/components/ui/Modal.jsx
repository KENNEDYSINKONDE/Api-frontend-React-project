import React from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root"); // Required for accessibility

function Modal({ isOpen, onClose, children }) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg mx-4"
    >
      {children}
    </ReactModal>
  );
}

export default Modal;
