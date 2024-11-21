'use client';
// front/src/app/_components/root/index.tsx
import React, { useEffect, useState, ReactNode } from 'react';
import { isMobile } from 'react-device-detect';
import Mobile from './Mobile';
import Desktop from './Desktop';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../type';
import Modal from '../modals';
import ConfirmModal from '../modals/ConfirmModal';

interface RootProps {
  children: ReactNode;
}

const Root: React.FC<RootProps> = ({ children }) => {
  const { confirmModal, modal, auth } = useSelector((state: RootState) => {
    return {
      confirmModal: state.modals.confirmModal,
      modal: state.modals.modal,
      auth: state.auth,
    };
  });
  const [isClient, setIsClient] = useState('');

  useEffect(() => {
    setIsClient(isMobile ? 'mobile' : 'desktop');
  }, []);

  return (
    <div>
      {confirmModal.open && <ConfirmModal />}
      {modal.open && <Modal />}
      {isClient === 'mobile' && <Mobile>{children}</Mobile>}
      {isClient === 'desktop' && <Desktop>{children}</Desktop>}
    </div>
  );
};

export default Root;
