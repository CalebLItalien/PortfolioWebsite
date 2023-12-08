import { useState } from 'react';
import styled from "styled-components";
import { NavigationBar } from "./components/NavigationBar";
import Home  from "./components/sections/Home";
import Resume from "./components/sections/Resume";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Certifications from "./components/sections/Certifications";
import Contact from "./components/sections/Contact";
import Experience from "./components/sections/Experience";
import { CenteredSection, StandardSection } from "./styles/Wrappers";

const AppWrapper = styled.div`
  height: 100vh;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
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
