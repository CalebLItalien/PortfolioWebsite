import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { theme } from "../theme";

interface ModalContainerProps {
    fadeOut: boolean;
    type: string;
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
  align-items: flex-end;
  justify-content: flex-start;
`;

const ModalContainer = styled.div<ModalContainerProps>`
  background-color: white;
  border-radius: ${theme.borderRadius};
  box-shadow: 0 8px 20px 5px rgba(0, 0, 0, 0.4);
  animation: ${props => props.fadeOut ? css`${fadeOut} 1s` : 'none'};
  animation-fill-mode: forwards;
  width: 25%;
  height: 10%;
  max-width: 350px;
  max-height: 150px;
  padding: 2%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1vw;
  background-color: ${props => props.type === 'failure' ? 
                    theme.colors.BRIGHT_RED : theme.colors.BRIGHT_GREEN};
`;

// const CloseButton = styled.button`
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   background: white;
//   border: none;
//   font-size: 1.5rem;
//   color: ${theme.colors.WHITE};
//   cursor: pointer;
//   z-index: 10;
// `;

const AlertMessage = styled.p`
  flex: 1;
  text-align: center;
  color: ${theme.colors.WHITE};
`;

interface AlertProps {
    message: string;
    onClose: () => void;
    fadeOut: boolean;
    type: string;
}

const Alert: React.FC<AlertProps> = ({ message, onClose, fadeOut, type }) => {
  return (
    <ModalBackground>
      <ModalContainer fadeOut={fadeOut} type={type}>
      {/* <CloseButton onClick={onClose}>&times;</CloseButton> */}
        <AlertMessage>{message}</AlertMessage>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Alert;
