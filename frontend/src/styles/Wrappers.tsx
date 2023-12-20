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
  text-align: left;
  border-bottom: 2px solid ${theme.colors.MUTED_BLUE};
  background: ${theme.colors.DARK_BLUE};
  display: grid;
  grid-template-columns: 1fr auto 1fr;
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
  position: relative;
`;

