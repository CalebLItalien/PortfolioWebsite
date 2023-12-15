import styled from 'styled-components';

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
  
export const HeadshotUnderline = styled.div<HeadshotUnderlineProps>`
    height: 2px; 
    background-color: black; 
    width: ${props => `${props.width}px`};  
    margin-left: auto;
    margin-right: auto;
    margin-top: -5px;
    border-radius: 5px;
`;

