import styled from 'styled-components';
import { theme } from "../theme";

export const Bio = styled.p`
  color: ${theme.colors.LIGHTEST_ORANGE};
  font-size: 1.3vw;
  line-height: 1.6;
  margin-top: 5vh;
  margin-bottom: 5vh;
`;

export const BioTabbed = styled.p`
  margin-left: 5vh;
  margin-right: 5vh;
`;

export const MarginBio = styled.p`
  color: ${theme.colors.LIGHTEST_ORANGE};
  font-size: clamp(1rem, 1.2vw, 1.5rem); 
  line-height: 1.2;
  margin-top: 5vh;
  margin-left: 5vh;
  margin-right: 5vh;
`;
