import styled from 'styled-components';
import { theme } from "../theme";
import { HOME_THRESHOLD } from '../constants';

export const CenteredSection = styled.section`
  min-height: 100vh; 
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  background: ${theme.colors.DARK_BLUE};
  color: #333333; 
  text-align: center; 
`;

export const ContactSection = styled.section`
  min-height: 60vh; 
  display: flex; 
  flex-direction: column; 
  justify-content: flex-start; 
  background: ${theme.colors.DARK_BLUE};
  position: relative;
`;

export const LeftToRightSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: stretch; 
  justify-content: flex-start; 
  background: ${theme.colors.DARK_BLUE};
  color: #333333;
  text-align: left;
  width: 100%;
`;

export const StandardSection = styled.section`
  min-height: 100vh; 
  display: flex; 
  flex-direction: column; 
  background: ${theme.colors.DARK_BLUE};
  color: #333333; 
  text-align: center; 
`;

export const NavBarWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1001;
  text-align: center;
  border-bottom: 2px solid ${theme.colors.LIGHTEST_ORANGE};
  background: ${theme.colors.DARK_BLUE};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
  box-shadow: 0px 8px 40px 5px rgba(0, 0, 0, 0.4);
`;

export const ExperienceWrapper = styled.div`
  position: relative;
`;

export const HomeWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const MobileHomeWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column; 
`;

export const SkillsWrapper = styled.div`
  position: relative;
`;

export const SkillsRatingsWrapper = styled.div`
    flex: 2; 
    background-color: ${theme.colors.LIGHTEST_ORANGE};
    min-height: 100vh;
`;

export const ProjectsWrapper = styled.div`
  position: relative;
`;

export const ResumeWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  text-align: center;
  width: 100vw;
`;

export const ContactWrapper = styled.div`
  width: 100%;
`;

interface HomeProps {
  windowWidth: number;
}

const MAX_WIDTH_HEADSHOT = 65; 
const MIN_WIDTH_HEADSHOT = 33; 

export const HeadshotWrapper = styled.div<HomeProps>`
  flex: 1;
  max-width: ${props => {
    const dynamicWidth = props.windowWidth <= HOME_THRESHOLD 
      ? MAX_WIDTH_HEADSHOT + (HOME_THRESHOLD - props.windowWidth) / HOME_THRESHOLD * (100 - MAX_WIDTH_HEADSHOT - MIN_WIDTH_HEADSHOT)
      : MIN_WIDTH_HEADSHOT;
    return `${dynamicWidth}%`;
  }};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const HomeContentWrapper = styled.div<HomeProps>`
  flex: 2;
  max-width: ${props => {
    const dynamicWidth = props.windowWidth <= HOME_THRESHOLD 
      ? 100 - (MAX_WIDTH_HEADSHOT + (HOME_THRESHOLD - props.windowWidth) / HOME_THRESHOLD * (100 - MAX_WIDTH_HEADSHOT - MIN_WIDTH_HEADSHOT))
      : 100 - MIN_WIDTH_HEADSHOT;
    return `${dynamicWidth}%`;
  }};
  padding-top: 20vh;
  padding-left: 15vh;
  padding-right: 15vh;
`;


export const DescriptionImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  gap: 10px; 
`;


