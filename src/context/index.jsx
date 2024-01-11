import { createContext, useState, useEffect } from "react";

// Create the context
export const MyContext = createContext();

// Create the provider component
export const MyContextProvider = ({ children }) => {
  // Define your state variables here
  const [products, setProducts] = useState([]);

  // Define any functions or methods you need
  const getProducts = async () => {
    // Fetch the products from an API
    const response = await fetch("https://sony-ecommerce.onrender.com/api/products", {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const data = await response.json();
    setProducts(data);
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
