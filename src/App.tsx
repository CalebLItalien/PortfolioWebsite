import {useState} from 'react';
import styled from "styled-components";
import { NavigationBar } from "./components/NavigationBar";
import Home  from "./sections/Home";
import Resume from "./sections/Resume";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";

const AppWrapper = styled.div`
  height: 100vh;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

const CenteredSection = styled.section`
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

const StandardSection = styled.section`
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

export function App() {
  const [navBarHeight, setNavBarHeight] = useState(0);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - navBarHeight,
        behavior: 'smooth'
      });
    }
  };
  return (
    <AppWrapper>
      <NavigationBar onHeightChange={setNavBarHeight} 
          scrollToSection={scrollToSection}/>
      <CenteredSection id="home">
        <Home/>
      </CenteredSection>
      <StandardSection id="experience">
        <Experience/>
      </StandardSection>
      <StandardSection id="skills">
        <Skills/>
      </StandardSection>
      <StandardSection id="projects">
        <Projects/>
      </StandardSection>
      <CenteredSection id="resume">
        <Resume/>
      </CenteredSection>
      <CenteredSection id="certifications">
        <Certifications/>
      </CenteredSection>
      <CenteredSection id="contact">
        <Contact/>
      </CenteredSection>
      
    </AppWrapper>
  );
}
