import React, { ReactElement } from "react";
import styled from "styled-components";
import { theme } from "../theme";

const NavBarWrapper = styled.div`
  text-align: left;
  border-bottom: 2px solid ${theme.colors.HARD_YELLOW};
  background: ${theme.colors.LIGHTER_GRAY};
  display: grid;
  grid-template-columns: 1fr auto 1fr;
`;

export function NavigationBar(): ReactElement {
    return (
        <NavBarWrapper></NavBarWrapper>
    )
}