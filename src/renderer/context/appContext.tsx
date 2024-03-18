import { CssBaseline, PaletteMode } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { createContext, useState } from 'react';
import { ContextProviderProps } from 'src/renderer/data/types';

type AppContextType = {
  isLoading: boolean;
  mode: PaletteMode;
  setIsLoading: (data: boolean) => void;
  setMode: (data: PaletteMode) => void;
};

export const AppContext = createContext<AppContextType>({
  isLoading: false,
  mode: 'dark',
  setIsLoading: (data: boolean) => {},
  setMode: (data: PaletteMode) => {},
});

export default function AppContextProvider({ children }: ContextProviderProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [mode, setMode] = useState<PaletteMode>('dark');

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <AppContext.Provider value={{ isLoading, mode, setIsLoading, setMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main>{children}</main>
      </ThemeProvider>
    </AppContext.Provider>
  );
}
