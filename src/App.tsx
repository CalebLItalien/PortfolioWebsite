import styled from "styled-components";
import { NavigationBar } from "./components/NavigationBar";
import Home  from "./sections/Home";
import Resume from "./sections/Resume";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
const AppWrapper = styled.div`
  height: 100vh;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

const StyledSection = styled.section`
  min-height: 100vh; 
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  justify-content: center; 
  background: #ffffff; 
  color: #333333; 
  text-align: center; 

  &:nth-of-type(odd) { 
    background: #f7f7f7;
  }

  h2 {
    margin: 0 0 2rem 0; // Space out the heading from the content below
    font-size: 2.5rem; // Large font size for the heading
  }

  p {
    font-size: 1rem; // Standard font size for the paragraph
    line-height: 1.6; // Line height for better readability
    max-width: 600px; // Max width of text content, for readability
    margin: 0 auto; // Center the text block
  }
  `;

export function App() {
  return (
    <AppWrapper>
      <NavigationBar />
      <StyledSection id="home">
        <Home/>
      </StyledSection>
      <StyledSection id="skills">
        <Skills/>
      </StyledSection>
      <StyledSection id="projects">
        <Projects/>
      </StyledSection>
      <StyledSection id="resume">
        <Resume/>
      </StyledSection>
      <StyledSection id="certifications">
        <Certifications/>
      </StyledSection>
      <StyledSection id="contact">
        <Contact/>
      </StyledSection>
      
    </AppWrapper>
  );
}
