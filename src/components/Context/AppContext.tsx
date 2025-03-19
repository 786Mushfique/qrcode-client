// import React, { createContext, useState, useContext, ReactNode } from "react";
// const MyContext = createContext<MyContextType | undefined>(undefined);
// export const MyContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [activeTab,setActiveTab] = useState("link")
//   return (
//     <MyContext.Provider value={{ 
//         activeTab,
//         setActiveTab
//          }}>
//       {children}
//     </MyContext.Provider>
//   );
// };
// export const useMyContext = () => {
//   const context = useContext(MyContext);
//   if (!context) {
//     throw new Error("useMyContext must be used within MyContextProvider");
//   }
//   return context;
// };

import React, { createContext, useState, useContext, ReactNode } from "react";

// Define the type for the context
interface MyContextType {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

// Create context with the defined type
const MyContext = createContext<MyContextType | undefined>(undefined);

export const MyContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState("link");

  return (
    <MyContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </MyContext.Provider>
  );
};

// Custom hook to use the context safely
export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
};
