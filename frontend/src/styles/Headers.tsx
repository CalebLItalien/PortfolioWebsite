import styled from 'styled-components';
import { theme } from "../theme";

export const Welcome = styled.h2`
  color: ${theme.colors.LIGHTEST_ORANGE};
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  margin-top: 5vh;
  min-height: 5vh;
`;

export const ContactMe = styled.h2`
  color: ${theme.colors.LIGHTEST_ORANGE};
  font-size: 1.9rem;
  font-weight: bold;
  margin-bottom: 1rem;
  margin-top: 5vh;
  min-height: 5vh;
  margin-left: 5vw;
  width: calc(100% - 10vw);
`;
