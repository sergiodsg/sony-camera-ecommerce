import { createContext, useState, useEffect } from "react";

// Create the context
export const MyContext = createContext();

// Create the provider component
export const MyContextProvider = ({ children }) => {
  // Define your state variables here
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [filter, setFilter] = useState("all");

  // Define any functions or methods you need
  const getProducts = async () => {
    setLoading(true);
    try {
      // Fetch the products from an API
      const response = await fetch(
        "https://sony-ecommerce.onrender.com/api/products",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setProducts(data);
      if (filter === "all") {
        setFilteredProducts(data);
      } else {
        setFilteredProducts(
          data.filter((product) => product.category === filter)
        );
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const addProductToCart = (id) => {
    const product = products.find((product) => product.id === id);
    setCart([...cart, product]);
    console.log(cart);
  };

  const removeProductFromCart = (id) => {
    setCart(cart.filter((product) => product.id !== id));
    console.log(cart);
  };

  useEffect(() => {
    getProducts();
  }, [filter]);

  // Return the context provider with the state and functions/methods
  return (
    <MyContext.Provider
      value={{
        products,
        setProducts,
        filteredProducts,
        filter,
        setFilter,
        loading,
        error,
        cart,
        addProductToCart,
        removeProductFromCart,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
