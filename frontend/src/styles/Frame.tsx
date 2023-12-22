import styled from 'styled-components';
import { theme } from "../theme";

export const SkillsFrame = styled.div`
    display: flex;
    align-items: flex-start;
    position: absolute;
    top: 20vh;
    left: 10vw;
    width: 80vw;
    height: 40vh;
    min-height: 40vh;
    background-color: #fff;
    border-radius: 50px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    border: 2px solid #000;
    padding: 20px;
    margin: 0;
    overflow: auto;
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
    border-radius: 15px;
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
  max-width: 50%;
  height: auto; 
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;