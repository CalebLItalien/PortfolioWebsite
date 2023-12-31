import styled from 'styled-components';
import { theme } from "../theme";

export const Underline = styled.div`
  height: 2px; 
  width: 80vw; 
  background-color: black;
  position: absolute;
  top: 15vh; 
  left: 10vw;
  background-color: ${theme.colors.LIGHTEST_ORANGE};
  @media screen and (max-height: 600px) {
    display: none;
  }
`;

type HeadshotUnderlineProps = {
    width: number;
  };
  
export const WelcomeUnderline = styled.div<HeadshotUnderlineProps>`
    height: 2px; 
    width: ${props => `${props.width}px`};  
    margin-left: auto;
    margin-right: auto;
    margin-top: -5px;
    border-radius: 5px;
    background-color: ${theme.colors.LIGHTEST_ORANGE};
`;

export const MobileWelcomeUnderline = styled.div`
  height: 2px; 
  width: 80vw;  
  margin-left: 10vw;
  margin-right: auto;
  border-radius: 5px;
  background-color: ${theme.colors.LIGHTEST_ORANGE};
`;

export const MobileUnderline = styled.div`
  height: 2px;
  width: 80vw;
  margin-left: 10vw;
  margin-right: auto;
  border-radius: 5px;
  background-color: ${theme.colors.LIGHTEST_ORANGE};
  @media screen and (max-height: 600px) {
    display: none;
  }
`;
