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
export const MobileWelcome = styled.h2`
  color: ${theme.colors.LIGHTEST_ORANGE};
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.3rem;
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

export const DownloadResume = styled.div`
  color: ${theme.colors.LIGHTEST_ORANGE};
  width: calc(50% - 30vw);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.9rem;
  font-weight: bold;
  margin-left: 30vw;
`;

export const BasicTitle = styled.h1`
  color: ${theme.colors.LIGHTEST_ORANGE};
  position: absolute;
  top: 10vh;
  left: 10vw;
  margin: 0;
`;