import styled from 'styled-components';
import { theme } from "../theme";

export const StyledNav = styled.nav`
  gap: 32px;
  margin: auto;
  align-items: center;
  display: flex;
`;

export const StyledAnchorLink = styled.a`
  display: block;
  position: relative;
  color: ${theme.colors.LIGHTEST_ORANGE};
  padding: 4px;
  margin: 4px 0;
  text-decoration: none;
  font-size: 1.2rem;
  &.active {
    color: ${theme.colors.WHITE};
    &:before {
      box-sizing: border-box;
      content: "";
      background: ${theme.colors.WHITE};
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      border-radius: 8px 8px 8px 8px;
    }
  }
  &:hover, &:focus, &:active {
    color: ${theme.colors.WHITE}; 
  }
`;