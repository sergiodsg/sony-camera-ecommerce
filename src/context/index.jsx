import { createContext, useState } from 'react';

// Create the context
export const MyContext = createContext();

// Create the provider component
export const MyContextProvider = ({ children }) => {
  // Define your state variables here
  const [data, setData] = useState(null);

  // Define any functions or methods you need

  // Return the context provider with the state and functions/methods
  return (
    <MyContext.Provider value={{ data, setData }}>
      {children}
    </MyContext.Provider>
  );
};
