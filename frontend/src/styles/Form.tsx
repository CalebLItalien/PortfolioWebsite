import styled from 'styled-components';
import { theme } from "../theme";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%; 
  margin-bottom: 1rem;
  box-sizing: border-box;
`;

export const StyledInput = styled.input`
  border-radius: 5px;
  margin-left: 5vw;
  margin-right: 5vw;
  margin-bottom: 2vh;
  min-height: 2vh;
  border: 1px solid #ccc;
  background-color: ${theme.colors.LIGHTEST_ORANGE};
  font-family: 'Consolas', monospace;
  font-size: 1rem;
  font-weight: normal;
  color: ${theme.colors.DARK_BLUE};
  ::placeholder {
    color: ${theme.colors.DARK_BLUE};
  };
`;

export const StyledTextArea = styled.textarea`
  border-radius: 5px;
  margin-left: 5vw;
  margin-right: 5vw;
  margin-bottom: 5vh;
  min-height: 13vh;
  border: 1px solid #ccc;
  background-color: ${theme.colors.LIGHTEST_ORANGE};
  font-family: 'Consolas', monospace;
  font-size: 1rem;
  font-weight: normal;
  color: ${theme.colors.DARK_BLUE};
  ::placeholder {
    color: ${theme.colors.DARK_BLUE};
  };
`;