import React from 'react';

const AppContext = React.createContext({
  isLoading: false,
  setIsLoading: (data) => {},
});

export default AppContext;
