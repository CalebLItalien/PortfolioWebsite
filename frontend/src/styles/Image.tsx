import styled from 'styled-components';
import { theme } from "../theme";

export const CompanyImage = styled.img`
  height: 100px;
  position: relative;
  margin-top: 30vh;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease;
  }
`;

export const HeadShotImage = styled.img`
  height: auto;
  width: 100%;
  max-width: 100%;
  border-radius: ${theme.borderRadius};
  object-fit: cover;
  box-shadow: 0px 8px 20px 5px rgba(0, 0, 0, 0.4); 
  margin-bottom: 10vh;
  margin-left: 15px;
  transition: box-shadow 0.3s ease;
  align-self: flex-end;
  margin-right: -4vw;

  &:hover {
    box-shadow: none;
  }
`;

export const MobileHeadShotImage = styled.img`
  height: auto;
  width: 35vw;
  border-radius: ${theme.borderRadius};
  box-shadow: 0px 8px 20px 5px rgba(0, 0, 0, 0.4); 
  transition: box-shadow 0.3s ease;
  align-self: center;
  &:hover {
    box-shadow: none;
  }
  margin-top: 2vh;
`;

export const PDFImage = styled.img`
  height: 70vh;
  max-width: 100%
  display: block;
  margin: 0 auto;
`

export const Loading = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10; 
`;

export const GithubProject = styled.img`
  cursor: pointer;
  width: 63px;
  height: 63px;
  margin-top: 30vh; 
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
  &::before {
    content: attr(data-tooltip); 
    position: absolute;
    background-color: rgba(0, 0, 0, 0.8); 
    color: white; 
    padding: 4px 8px; 
    border-radius: 4px;
    top: 100%; 
    left: 50%;
    transform: translateX(-50%) translateY(10px); 
    opacity: 0; 
    transition: opacity 0.2s ease-in-out;
    pointer-events: none;  
    white-space: nowrap;  
  }

  &:hover::before {
    opacity: 1;
  }
`;
