import { createContext, useState, useEffect } from "react";

// Create the context
export const MyContext = createContext();

// Create the provider component
export const MyContextProvider = ({ children }) => {
  // Define your state variables here
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Define any functions or methods you need
  const getProducts = async () => {
    try {
      // Fetch the products from an API
      const response = await fetch("https://sony-ecommerce.onrender.com/api/products", {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError(true);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  // Return the context provider with the state and functions/methods
  return (
    <MyContext.Provider value={{ products, setProducts, loading, error }}>
      {children}
    </MyContext.Provider>
  );
};
