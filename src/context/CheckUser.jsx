import React from "react";

export const CheckUser = ({ Component }) => {
  const DataContext = React.createContext();

  return (
    <DataContext.Provider value={}>
      <Component />
    </DataContext.Provider>
  );
};
