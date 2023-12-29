import styled from 'styled-components';
import { theme } from "../theme";

export const ProjectDescription = styled.p`
  color: ${theme.colors.LIGHTEST_ORANGE};
  position: absolute;
  top: 30vh;
  left: 10vw; 
  right: 33vw;
  font-size: clamp(1rem, 1.2vw, 1.5rem); 
  line-height: 1.2;
  text-align: left;
`;

export const ExperienceDescription = styled.p`
  color: ${theme.colors.LIGHTEST_ORANGE};
  position: absolute;
  top: 40vh;
  left: 10vw;
  right: 10vw;
  font-size: clamp(0.5rem, 1vw + 1vh, 1.5rem);  
  line-height: 1.2;
  text-align: left;
`;

type ResumeDownloadProps = {
  width: number;
}

export const DownloadResume = styled.div<ResumeDownloadProps>`
  width: ${props => props.width}px;
  color: ${theme.colors.LIGHTEST_ORANGE};
  text-align: center;
  margin-top: 10px;
`;