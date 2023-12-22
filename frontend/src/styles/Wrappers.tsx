import styled from 'styled-components';
import { theme } from "../theme";

export const CenteredSection = styled.section`
  min-height: 100vh; 
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  background: ${theme.colors.DARK_BLUE};
  color: #333333; 
  text-align: center; 
  h2 {
    margin: 0 0 2rem 0; 
    font-size: 2.5rem; 
  }
  p {
    font-size: 1rem; 
    line-height: 1.6; 
    max-width: 600px; 
    margin: 0 auto; 
  }
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
  h2 {
    margin: 0 0 2rem 0; 
    font-size: 2.5rem; 
  }
  p {
    font-size: 1rem; 
    line-height: 1.6; 
    max-width: 600px; 
    margin: 0 auto; 
  }
`;

export const NavBarWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
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

export const SkillsWrapper = styled.div`
  position: relative;
`;

export const SkillsRatingsWrapper = styled.div`
    flex-grow: 1; 
`;

export const ProjectsWrapper = styled.div`
  position: relative;
`;

export const ResumeWrapper = styled.div`
  position: relative;
`;

export const ContactWrapper = styled.div`
  width: 100%;
`;

export const HeadshotWrapper = styled.div`
  flex: 1;
  max-width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const HomeContentWrapper = styled.div`
  flex: 2;
  max-width: 66%;
  padding-top: 20vh;
  padding-left: 15vh;
  padding-right: 15vh;
`;



