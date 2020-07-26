import React from 'react';
import { ThemeProvider } from 'styled-components';

import { light } from '@styles/themes';

const AppProvider: React.FC = ({ children }) => {
  return <ThemeProvider theme={light}>{children}</ThemeProvider>;
};

export default AppProvider;
