import { createContext, useState, useEffect } from "react";

// Create the context
export const MyContext = createContext();

// Create the provider component
export const MyContextProvider = ({ children }) => {
  // Define your state variables here
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [filter, setFilter] = useState("all");

  // Define any functions or methods you need
  const getProducts = async () => {
    try {
      setLoading(true);
      // Fetch the products from an API
      const response = await fetch("https://sony-ecommerce.onrender.com/api/products", {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const data = await response.json();
      setProducts(data);
      if (filter === "all") {
        setFilteredProducts(data);
        setLoading(false);
      } else {
        setFilteredProducts(data.filter((product) => product.category === filter));
        setLoading(false);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      setError(true);
    }
  };

  // const filterProducts = () => {
  //   if (filter === "all") {
  //     setFilteredProducts(products);
  //   } else {
  //     setFilteredProducts(products.filter((product) => product.category === filter));
  //   }
  // };

  useEffect(() => {
    getProducts();
    // filterProducts();
  }, [filter]);


  // Return the context provider with the state and functions/methods
  return (
    <MyContext.Provider value={{ products, setProducts, filteredProducts, filter, setFilter, loading, error }}>
      {children}
    </MyContext.Provider>
  );
};
