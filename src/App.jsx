import React, { useMemo, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Container, ThemeProvider } from '@mui/material';
import { styled } from '@mui/material/styles';

import ToDoContainer from './components/ToDoContainer';
import mainTheme from './themes/mainTheme';
import Ticker from './components/Ticker';
import { NewsProvider } from './contexts/newsContext';

import './App.css';

const StyledContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'center',
  padding: '50px 0'
});

const App = () => {
  const queryClient = new QueryClient({});

  const [showNews, setShowNews] = useState(true);

  const value = useMemo(() => ({ showNews, setShowNews }), [showNews]);

  return (
    <QueryClientProvider client={queryClient}>
      <NewsProvider value={value}>
        <ThemeProvider theme={mainTheme}>
          <div className='App'>
            <StyledContainer>
              <ToDoContainer />
              {showNews && <Ticker />}
            </StyledContainer>
          </div>
        </ThemeProvider>
      </NewsProvider>
    </QueryClientProvider>
  );
};

export default App;
