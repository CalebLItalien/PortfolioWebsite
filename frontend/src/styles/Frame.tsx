import styled from 'styled-components';
import { theme } from "../theme";

export const SkillsFrame = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    position: absolute;
    top: 20vh;
    left: 10vw;
    width: 80vw;
    height: 30vh;
    min-height: 30vh;
    border-radius: ${theme.borderRadius};
    box-shadow: 0 8px 20px 5px rgba(0, 0, 0, 0.4);
    margin: 0;
    overflow: hidden;
`;

export const ContactFrame = styled.div`
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: absolute;
    top: 5vh;
    left: 5vw;
    width: 90vw;
    height: 50vh;
    min-height: 50vh;
    background-color: ${theme.colors.DARK_BLUE};
    border-radius: ${theme.borderRadius};
    box-shadow: 0 8px 20px 5px rgba(0, 0, 0, 0.4);
    transition: box-shadow 0.3s ease;
    margin: 0;
    overflow: auto;
    object-fit: cover;

    // &:hover {
    //     box-shadow: none;
    // }
`;

export const PDFImageFrame = styled.div`
  margin-top: 25vh;
  margin-right: 5vw;
  height: auto; 
  display: flex;
  align-items: left;
`;