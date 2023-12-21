import { useRef, useEffect, ReactElement } from "react";
import { useName } from "../hooks/useName";
import { NavBarWrapper } from "../styles/Wrappers";
import { StyledHeading } from "../styles/NameHeader";
import { StyledNav, StyledAnchorLink } from "../styles/Anchors";

interface NavigationBarProps {
  onHeightChange: (height: number) => void;
  scrollToSection: (sectionId: string) => void;
}

export function NavigationBar({ onHeightChange, scrollToSection }: NavigationBarProps): JSX.Element {
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
            <StyledAnchorLink onClick={() => scrollToSection('home')}>
              Home
            </StyledAnchorLink>
            <StyledAnchorLink onClick={() => scrollToSection('experience')}>
              Experience
            </StyledAnchorLink>
            <StyledAnchorLink onClick={() => scrollToSection('skills')}>
              Skills
            </StyledAnchorLink>
            <StyledAnchorLink onClick={() => scrollToSection('projects')}>
              Projects
            </StyledAnchorLink>
            <StyledAnchorLink onClick={() => scrollToSection('resume')}>
              Resume
            </StyledAnchorLink>
            {/* <StyledAnchorLink onClick={() => scrollToSection('certifications')}>
              Certifications
            </StyledAnchorLink> */}
            <StyledAnchorLink onClick={() => scrollToSection('contact')}>
              Contact
            </StyledAnchorLink>
          </StyledNav>
      </NavBarWrapper>
  );
}
