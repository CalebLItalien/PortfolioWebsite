import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { NavigationBar } from "./components/NavigationBar";
import Home  from "./components/sections/Home";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
import MobileHome from "./components/sections/MobileHome";
import Experience from "./components/sections/Experience";
import { CenteredSection, 
  ContactSection, 
  LeftToRightSection, 
  StandardSection,
  SkillsSection } from "./styles/Wrappers";
import { MOBILE_THRESHOLD } from "./constants";

const AppWrapper = styled.div`
  height: 100vh;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

export function App() {
  const [navBarHeight, setNavBarHeight] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const [isProgrammaticScroll, setIsProgrammaticScroll] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const monitorScroll = () => {
    if (isProgrammaticScroll) return;
    const sections = ['home', 'experience', 'skills', 'projects', 'resume', 'contact'];
    let maxVisibleHeight = 0;
    let mostVisibleSection = '';
  
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
        
        if (visibleHeight > maxVisibleHeight) {
          maxVisibleHeight = visibleHeight;
          mostVisibleSection = id;
        }
      }
    });
  
    if (mostVisibleSection !== activeSection) {
      setActiveSection(mostVisibleSection);
    }
  };
  

  useEffect(() => {
    monitorScroll(); // for when the component initially mounts
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      monitorScroll();
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isProgrammaticScroll, monitorScroll]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
  
    window.addEventListener('resize', handleResize);
  
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsProgrammaticScroll(true);
    setActiveSection(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - navBarHeight,
        behavior: 'smooth'
      });
    }
    setTimeout(() => {
      setIsProgrammaticScroll(false);
    }, 1000);
  };

  const renderHomeSection = () => {
    if (windowWidth <= MOBILE_THRESHOLD) {
      return (
        <CenteredSection id="home">
          <MobileHome />
        </CenteredSection>
      );
    } else {
      return (
        <LeftToRightSection id="home">
          <Home 
            windowWidth={windowWidth} />
        </LeftToRightSection>
      );
    }
  };

  return (
    <AppWrapper>
      <NavigationBar onHeightChange={setNavBarHeight} 
                     scrollToSection={scrollToSection}
                     activeSection={activeSection}
                     windowWidth={windowWidth}/>
      {renderHomeSection()}
      <StandardSection id="experience">
        <Experience/>
      </StandardSection>
      <SkillsSection id="skills">
        <Skills windowWidth={windowWidth}/>
      </SkillsSection>
      <StandardSection id="projects">
        <Projects windowWidth={windowWidth}/>
      </StandardSection>
      <ContactSection id="contact">
        <Contact/>
      </ContactSection>
    </AppWrapper>
  );
}
