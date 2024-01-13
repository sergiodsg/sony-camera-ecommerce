import { useRoutes, BrowserRouter } from "react-router-dom";
import { MyContextProvider } from "../../context";
import Home from "../Home";
import ShoppingCart from "../ShoppingCart";
import Product from "../Product";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import NotFound from "../../components/NotFound";

const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/product/:id", element: <Product /> },
    { path: "/shopping-cart", element: <ShoppingCart /> },
    // { path: "/sign-in", element: <SignIn /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <>
      <MyContextProvider>
        <BrowserRouter>
          <Navbar />
          <Layout>
            <div className="fixed h-screen w-screen overflow-auto pb-16">
              <AppRoutes />
            </div>
          </Layout>
        </BrowserRouter>
      </MyContextProvider>
    </>
  );
};

export default App;
