'use client';

import { ThemeProvider } from '@mui/material';
import { theme } from '../theme';
import GameProvider from '../context/Game';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <GameProvider>{children}</GameProvider>
    </ThemeProvider>
  );
};
