import { createContext, useState, useEffect } from "react";
import { initialProducts } from "../utils/initialProducts";

// Create the context
export const MyContext = createContext();

// Create the provider component
export const MyContextProvider = ({ children }) => {
  // Define your state variables here
  const [products, setProducts] = useState([]);

  // Define any functions or methods you need
  const getProducts = () => {
    // Fetch the products from an API
    setProducts(initialProducts);
  };

  useEffect(() => {
    getProducts();
  }, []);

  // Return the context provider with the state and functions/methods
  return (
    <MyContext.Provider value={{ products, setProducts }}>
      {children}
    </MyContext.Provider>
  );
};
