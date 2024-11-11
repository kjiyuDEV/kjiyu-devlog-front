import React, { ReactNode } from 'react';
import Modal from 'react-modal';
import { useSpring, animated } from 'react-spring';

// 모달 스타일 설정
Modal.setAppElement('#root'); // 접근성 설정

interface AnimatedModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    children: ReactNode;
}

const AnimatedModal: React.FC<AnimatedModalProps> = ({ isOpen, onRequestClose, children }) => {
    const animationProps = useSpring({
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? 'translateY(0)' : 'translateY(-50px)',
    });

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                },
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '10px',
                    padding: '20px',
                    width: '400px',
                },
            }}
        >
            <animated.div style={animationProps}>{children}</animated.div>
        </Modal>
    );
};

export default AnimatedModal;
