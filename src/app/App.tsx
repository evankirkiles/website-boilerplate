import { ThemeProvider } from 'styled-components';
import { useAppSelector } from './hooks';
import * as S from './App.styled';

import { BrowserRouter } from 'react-router-dom';
import Layout from '../hocs/Layout/Layout';
import { selectTheme } from '../features/theme/themeSlice';


const App: React.FC<{}> = () => {

  // Keep track of the user's theme selection
  const theme = useAppSelector(selectTheme);

  return (
    <ThemeProvider theme={theme}>
      <S.GlobalData />
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
