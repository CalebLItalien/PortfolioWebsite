import styled from 'styled-components';
import { theme } from "../theme";

export const StyledHeading = styled.h1`
  font-weight: bold;
  font-size: ${theme.fontSizes.lg};
  margin: 0;
  padding: 4px;
  color: ${theme.colors.MUTED_BLUE};
`;

export default StyledHeading;