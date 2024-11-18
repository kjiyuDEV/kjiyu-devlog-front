// src/app/_components/Modal.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ModalState, RootState } from '../../../../type';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ModalProps {
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  const dispatch = useDispatch();
  const { modal } = useSelector((state: RootState) => {
    console.log(state, '<state');
    return {
      modal: state.modals.modal,
      auth: state.auth,
    };
  });

  const handleClose = () => {
    dispatch({
      type: 'CLOSE_MODAL',
    });
  };

  if (!modal.open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {modal.data.title && (
          <h2 className="modal-title">{modal.data.title}</h2>
        )}
        <button className="modal-close" onClick={handleClose}>
          <FontAwesomeIcon icon={faTimes} /> {/* X 아이콘 추가 */}
        </button>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
