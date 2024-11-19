'use client';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../type';
import { TYPE } from '../types';
import { toast } from 'react-toastify';

const ConfirmModal = () => {
  const dispatch = useDispatch();
  const { modal, confirmModal } = useSelector((state: RootState) => {
    return {
      modal: state.modals.modal,
      auth: state.auth,
      confirmModal: state.modals.confirmModal,
    };
  });

  const handleClose = () => {
    dispatch({
      type: modal.open ? TYPE.CLOSE_MODAL : TYPE.CLOSE_CONFIRM_MODAL,
    });
  };

  const handleConfirm = () => {
    toast('로그아웃 했습니다');
  };
  return (
    <div className="confirm-modal-overlay">
      <div className="modal-content">
        {confirmModal.data.content && (
          <h2 className="modal-contents">{modal.data.content}</h2>
        )}
        <button className="modal-confirm" onClick={handleConfirm}>
          네gg
        </button>
        <button className="modal-cancel" onClick={handleClose}>
          아니오
        </button>
      </div>
    </div>
  );
};

export default ConfirmModal;
