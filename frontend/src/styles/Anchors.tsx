import styled from 'styled-components';
import { theme } from "../theme";

export const StyledNav = styled.nav`
  gap: 32px;
  margin: auto;
  align-items: center;
  display: flex;
`;

interface StyledAnchorLinkProps {
  windowHeight: number;
}

export const StyledAnchorLink = styled.a<StyledAnchorLinkProps>`
  --base-font-size: ${({ windowHeight }) => `clamp(0.2rem, 2vh, 1.2rem)`};
  --hover-font-size-increase: 1.1;

  display: block;
  position: relative;
  color: ${theme.colors.LIGHTEST_ORANGE};
  padding: ${({ windowHeight }) => windowHeight < 600 ? '1px' : '4px'};  
  text-decoration: none;
  font-size: var(--base-font-size);
  transition: font-size 0.3s ease-in-out;

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
      transition: height 0.3s ease-in-out;
    }
  }

  &:hover, &:focus, &:active {
    color: ${theme.colors.WHITE}; 
    font-size: calc(var(--base-font-size) * var(--hover-font-size-increase));
  }
`;


