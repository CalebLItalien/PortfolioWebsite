import { useRef, useEffect, ReactElement } from "react";
import { useName } from "../hooks/useName";
import { NavBarWrapper } from "../styles/Wrappers";
import { StyledNav, StyledAnchorLink } from "../styles/Anchors";

interface NavigationBarProps {
  onHeightChange: (height: number) => void;
  scrollToSection: (sectionId: string) => void;
  activeSection: string;
}

export function NavigationBar({ onHeightChange, scrollToSection, activeSection }: NavigationBarProps): JSX.Element {
  const navBarRef = useRef<HTMLDivElement>(null);
  const name = useName();

  useEffect(() => {
    const updateNavBarHeight = () => {
      if (navBarRef.current) {
        const newHeight = navBarRef.current.offsetHeight;
        onHeightChange(newHeight); 
      }
    };

    updateNavBarHeight();
    window.addEventListener('resize', updateNavBarHeight);

    return () => window.removeEventListener('resize', updateNavBarHeight);
  }, [onHeightChange]);

  return (
      <NavBarWrapper ref={navBarRef}>
          <StyledNav>
            <StyledAnchorLink onClick={() => scrollToSection('home')}
                              className={activeSection === 'home' ? 'active' : ''}>
              Home
            </StyledAnchorLink>
            <StyledAnchorLink onClick={() => scrollToSection('experience')}
                              className={activeSection === 'experience' ? 'active' : ''}>
              Experience
            </StyledAnchorLink>
            <StyledAnchorLink onClick={() => scrollToSection('skills')}
                              className={activeSection === 'skills' ? 'active' : ''}>
              Skills
            </StyledAnchorLink>
            <StyledAnchorLink onClick={() => scrollToSection('projects')}
                              className={activeSection === 'projects' ? 'active' : ''}>
              Projects
            </StyledAnchorLink>
            <StyledAnchorLink onClick={() => scrollToSection('resume')}
                              className={activeSection === 'resume' ? 'active' : ''}>
              Resume
            </StyledAnchorLink>
            {/* <StyledAnchorLink onClick={() => scrollToSection('certifications')}>
              Certifications
            </StyledAnchorLink> */}
            <StyledAnchorLink onClick={() => scrollToSection('contact')}
                              className={activeSection === 'contact' ? 'active' : ''}>
              Contact
            </StyledAnchorLink>
          </StyledNav>
      </NavBarWrapper>
  );
}
