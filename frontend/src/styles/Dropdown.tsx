import styled from 'styled-components';
import { theme } from "../theme";

export const DropdownWrapper = styled.div`
  position: absolute;
  top: 20vh;
  left: 10vw; 
  right: 10vw;
  z-index: 1000;
`;


export const DropdownButton = styled.button<DropdownProps>`
  padding: 10px;
  border: none;
  background-color: ${theme.colors.DARK_BLUE};
  box-shadow: 0 8px 20px 5px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  color: ${theme.colors.LIGHTEST_ORANGE};
  border-radius: ${props => props.show 
    ? `${theme.borderRadius} ${theme.borderRadius} 0 0` 
    : `${theme.borderRadius}`};  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 28px;
    height: 28px;
    transform: ${props => props.show ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition: transform 0.3s ease; 
  }
`;

type DropdownProps = {
  show: boolean;
};

export const DropdownContent = styled.div<DropdownProps>`
  display: ${(props) => (props.show ? 'block' : 'none')}; 
  position: absolute;
  color: ${theme.colors.LIGHTEST_ORANGE};
  background-color: ${theme.colors.DARK_BLUE};
  // border-radius: 0 0 ${theme.borderRadius} ${theme.borderRadius};
  box-shadow: 0 8px 20px 5px rgba(0, 0, 0, 0.4);
`;

export const DropdownOption = styled.button`
  color: ${theme.colors.LIGHTEST_ORANGE};
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  width: 100%;
  background: none;
  border: none;
  background-color: ${theme.colors.DARK_BLUE};
  text-align: left;
  cursor: pointer;
  transition: font-size 0.3s ease; 

  // &:hover {
  //   font-size: 1.1em; 
  // }
`;