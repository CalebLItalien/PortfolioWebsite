import styled from 'styled-components';
import { theme } from "../theme";

export const ProjectDescription = styled.p`
  color: ${theme.colors.LIGHTEST_ORANGE};
  top: 30vh;
  left: 10vw; 
`;

export const ExperienceDescription = styled.p`
  color: ${theme.colors.LIGHTEST_ORANGE};
  position: absolute;
  top: 30vh;
  left: 10vw;
  right: 10vw;
  font-size: clamp(1rem, 1.2vw, 1.5rem); 
  line-height: 1.2;
`;
