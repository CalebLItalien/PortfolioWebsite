import styled from 'styled-components';
import { theme } from "../theme";

export const  DropdownWrapper = styled.div`
  position: absolute;
  top: 20vh;
  left: 10vw; 
  width: 200px;
`;

export const  DropdownButton = styled.button`
  padding: 10px;
  width: 100%;
  border: none;
  background-color: #f0f0f0;
  cursor: pointer;
`;

type DropdownProps = {
  show: boolean;
};

export const  DropdownContent = styled.div<DropdownProps>`
  display: ${(props) => (props.show ? 'block' : 'none')}; 
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  color: ${theme.colors.LIGHTEST_ORANGE};
`;

export const  DropdownOption = styled.button`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  background: none;
  border: none;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;