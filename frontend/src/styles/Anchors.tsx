import styled from 'styled-components';
import { theme } from "../theme";

export const StyledNav = styled.nav`
  gap: 16px;
  margin: auto;
  align-items: center;
  display: flex;
`;

export const StyledAnchorLink = styled.a`
  display: block;
  position: relative;
  color: ${theme.colors.MUTED_BLUE};
  padding: 4px;
  margin: 4px 0;
  text-decoration: none;
  &.active {
    color: ${theme.colors.WHITE};
    &:before {
      content: "";
      background: ${theme.colors.WHITE};
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      border-radius: 0 0 8px 8px;
    }
  }
  &:hover, &:focus, &:active {
    color: ${theme.colors.WHITE}; 
  }
`;