import { ReactElement } from "react";
import styled from "styled-components";
import {useName} from "../utils/useName";
import {
    HomePath,
    ResumePath,
    ProjectsPath,
    SkillsPath,
    CertificationsPath,
    ContactPath,
    ExperiencePath,
  } from "../routing/paths";
import { theme } from "../theme";


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


export function NavigationBar(): ReactElement {
  const name = useName();
  return (
      <NavBarWrapper>
          <StyledHeading>{name}</StyledHeading>
          <StyledNav>
            <StyledAnchorLink href={HomePath}>
              Home
            </StyledAnchorLink>
            <StyledAnchorLink href={ExperiencePath}>
              Experience
            </StyledAnchorLink>
            <StyledAnchorLink href={SkillsPath}>
              Skills
            </StyledAnchorLink>
            <StyledAnchorLink href={ProjectsPath}>
              Projects
            </StyledAnchorLink>
            <StyledAnchorLink href={ResumePath}>
              Resume
            </StyledAnchorLink>
            <StyledAnchorLink href={CertificationsPath}>
              Certifications
            </StyledAnchorLink>
            <StyledAnchorLink href={ContactPath}>
              Contact
            </StyledAnchorLink>
          </StyledNav>
      </NavBarWrapper>
  );
}