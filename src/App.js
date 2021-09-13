import { ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import Route from './Route';
import theme from './easydev/theme';

const App = () => {
  const routing = useRoutes(Route);
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {routing}
      </ThemeProvider>
  );
};

export default App;
