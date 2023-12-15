import styled from 'styled-components';
import { theme } from "../theme";

export const CenteredSection = styled.section`
  min-height: 100vh; 
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  background: #ffffff; 
  color: #333333; 
  text-align: center; 
  &:nth-of-type(odd) { 
    background: #f7f7f7;
  }
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

export const StandardSection = styled.section`
  min-height: 100vh; 
  display: flex; 
  flex-direction: column; 
  background: #ffffff; 
  color: #333333; 
  text-align: center; 
  &:nth-of-type(odd) { 
    background: #f7f7f7;
  }
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
  border-bottom: 2px solid ${theme.colors.HARD_YELLOW};
  background: ${theme.colors.LIGHTER_GRAY};
  display: grid;
  grid-template-columns: 1fr auto 1fr;
`;

export const ExperienceWrapper = styled.div`
  position: relative;
`;

export const HomeWrapper = styled.div`
  margin-top: -20vh;
  position: relative;
  justify-content: center; 
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

