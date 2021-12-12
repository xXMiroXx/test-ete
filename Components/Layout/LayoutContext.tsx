import React from "react";

import { NavListProps } from "./type";

const LayoutContext = React.createContext<{ navList: NavListProps }>({
  navList: [],
});

export const LayoutContextProvider: React.FC<{ navList: NavListProps }> = ({
  children,
  navList,
}) => {
  return (
    <LayoutContext.Provider value={{ navList }}>
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutContext;
