import { createContext, useState } from 'react';
import { ContextProviderProps } from 'src/renderer/data/types';

type AppContextType = {
  isLoading: boolean;
  setIsLoading: (data: boolean) => void;
};

export const AppContext = createContext<AppContextType>({
  isLoading: false,
  setIsLoading: (data: boolean) => {},
});

export default function AppContextProvider({ children }: ContextProviderProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </AppContext.Provider>
  );
}
