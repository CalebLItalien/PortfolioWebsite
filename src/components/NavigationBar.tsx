import { ReactElement, useRef, useEffect } from "react";
import styled from "styled-components";
import {useName} from "../hooks/useName";
import { theme } from "../theme";

interface NavigationBarProps {
  onHeightChange: (height: number) => void;
  scrollToSection: (sectionId: string) => void;
}

const NavBarWrapper = styled.div`
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
const StyledNav = styled.nav`
  gap: 16px;
  margin: auto;
  align-items: center;
  display: flex;
`;

const StyledAnchorLink = styled.a`
  display: block;
  position: relative;
  color: ${theme.colors.TEXT_GRAY};
  padding: 4px;
  margin: 4px 0;
  text-decoration: none;
  &.active {
    color: ${theme.colors.DARK_RED};
    &:before {
      content: "";
      background: ${theme.colors.DARK_RED};
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      border-radius: 0 0 8px 8px;
    }
  }
  &:hover, &:focus, &:active {
    color: ${theme.colors.DARK_RED}; // for hover, focus, active state
  }
`;

export const StyledHeading = styled.h1`
  font-weight: bold;
  font-size: ${theme.fontSizes.lg};
  margin: 0;
  padding: 4px;
`;


export function NavigationBar({ onHeightChange, scrollToSection }: NavigationBarProps): ReactElement {
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
          <StyledHeading>{name}</StyledHeading>
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