import styled from 'styled-components';
import { theme } from "../theme";

export const Underline = styled.div`
  height: 2px; 
  width: 80vw; 
  background-color: black;
  position: absolute;
  top: 15vh; 
  left: 10vw;
`;

type HeadshotUnderlineProps = {
    width: number;
  };
  
export const WelcomeUnderline = styled.div<HeadshotUnderlineProps>`
    height: 1px; 
    width: ${props => `${props.width}px`};  
    margin-left: auto;
    margin-right: auto;
    margin-top: -5px;
    border-radius: 5px;
    background-color: ${theme.colors.MUTED_BLUE}
`;

