import { useState } from 'react';
import AppContext from './app-context';

const defaultLoadingState = {
  isLoading: false,
};

const AppProvider = (props) => {
  const [loadingState, setLoadingState] = useState(defaultLoadingState);

  const setIsLoadingHandler = (data) => {
    setLoadingState(data);
  };

  const appContext = {
    isLoading: loadingState,
    setIsLoading: setIsLoadingHandler,
  };

  return (
    <AppContext.Provider value={appContext}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
