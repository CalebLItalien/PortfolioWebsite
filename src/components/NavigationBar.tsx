import React, { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../theme";
import {
    HomePath,
    ResumePath,
    ProjectsPath,
    SkillsPath,
    CertificationsPath,
    ContactPath,
  } from "../routing/paths";

const NavBarWrapper = styled.div`
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

const StyledNavLink = styled.a`
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
`;

export const StyledHeading = styled.h1`
  font-weight: bold;
  font-size: ${theme.fontSizes.lg};
  margin: 0;
  padding: 4px;
`;


export function NavigationBar(): ReactElement {
    return (
        <NavBarWrapper>
            <StyledHeading>Caleb L'Italien's Resume</StyledHeading>
                <StyledNav>
                    <StyledNavLink as={NavLink} to={HomePath}>
                    Home
                    </StyledNavLink>
                    <StyledNavLink as={NavLink} to={ResumePath}>
                    Resume
                    </StyledNavLink>
                    <StyledNavLink as={NavLink} to={ProjectsPath}>
                    Projects
                    </StyledNavLink>
                    <StyledNavLink as={NavLink} to={SkillsPath}>
                    Skills
                    </StyledNavLink>
                    <StyledNavLink as={NavLink} to={CertificationsPath}>
                    Certifications
                    </StyledNavLink>
                    <StyledNavLink as={NavLink} to={ContactPath}>
                    Contact
                    </StyledNavLink>
                </StyledNav>
        </NavBarWrapper>
    )
}