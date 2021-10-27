import { createGlobalStyle } from 'styled-components';
import { ThemeData } from '../features/theme/themeSlice';

export const GlobalData = createGlobalStyle`
  html,
  body,
  #root {
    background-color: ${({ theme }) => (theme as ThemeData).background};
    color: ${({ theme }) => (theme as ThemeData).text};
    line-height: 1.5;
  }
`;