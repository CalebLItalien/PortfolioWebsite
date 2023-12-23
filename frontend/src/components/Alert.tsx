import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface ModalContainerProps {
    fadeOut: boolean;
}
const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const ModalContainer = styled.div<ModalContainerProps>`
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 8px 20px 5px rgba(0, 0, 0, 0.4);
  position: absolute;
  bottom: 0;
  left: 0;
  animation: ${props => props.fadeOut ? css`${fadeOut} 1s` : 'none'};
  animation-fill-mode: forwards;
  width: 25%;
  height: 10%;
  bottom: 2%;
  left: 2%
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalButton = styled.button`
  position: absolute;
  top: 10px; 
  right: 10px; 
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1rem; 
  line-height: 1;
  padding: 0;

  &:after {
    content: 'x'; 
  }
`;

const AlertMessage = styled.p`
  top: 50%;
  transform: translateY(50%);
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

interface AlertProps {
    message: string;
    onClose: () => void;
    fadeOut: boolean;
}

const Alert: React.FC<AlertProps> = ({ message, onClose, fadeOut }) => {
  return (
    <ModalBackground>
      <ModalContainer fadeOut={fadeOut}>
        <ModalButton onClick={onClose}/>
        <AlertMessage>{message}</AlertMessage>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Alert;
