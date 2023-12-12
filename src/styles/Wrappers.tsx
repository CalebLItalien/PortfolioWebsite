import styled from 'styled-components';

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

