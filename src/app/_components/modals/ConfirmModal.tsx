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
    dispatch({
      type: TYPE.LOGOUT_SUCCESS,
    });
    handleClose();
    toast('로그아웃 되었습니다');
  };
  return (
    <div className="confirm-modal-overlay">
      <div className="modal-content">
        {confirmModal.data.content && (
          <h4 className="modal-contents">{confirmModal.data.content}</h4>
        )}
        <div className="btn-wrap">
          <button className="btn-cancel" onClick={handleClose}>
            아니오
          </button>
          <button className="btn-confirm" onClick={handleConfirm}>
            네
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
