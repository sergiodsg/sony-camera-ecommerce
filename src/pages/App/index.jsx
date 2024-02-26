import { useRoutes, HashRouter } from "react-router-dom";
import { MyContextProvider } from "../../context";
import Home from "../Home";
import ShoppingCart from "../ShoppingCart";
import Product from "../Product";
import Account from "../Account";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import NotFound from "../../components/NotFound";

const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/product/:id", element: <Product /> },
    { path: "/shopping-cart", element: <ShoppingCart /> },
    { path: "/account", element: <Account /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <>
      <MyContextProvider>
        <HashRouter>
          <Navbar />
          <Layout>
            <div className="fixed h-screen w-screen overflow-auto pb-16">
              <AppRoutes />
            </div>
          </Layout>
        </HashRouter>
      </MyContextProvider>
    </>
  );
};

export default App;
