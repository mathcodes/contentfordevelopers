import React, { createContext, useContext, useState } from 'react';

const DevEyesContext = createContext({ devEyes: false, setDevEyes: () => {} });

export function DevEyesProvider({ children }) {
  const [devEyes, setDevEyes] = useState(false);
  return (
    <DevEyesContext.Provider value={{ devEyes, setDevEyes }}>
      {children}
    </DevEyesContext.Provider>
  );
}

export function useDevEyes() {
  return useContext(DevEyesContext);
}
