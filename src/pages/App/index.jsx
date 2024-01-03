import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../Home";
import ShoppingCart from "../ShoppingCart";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import NotFound from "../../components/NotFound";

const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/shopping-cart", element: <ShoppingCart />},
    // { path: "/sign-in", element: <SignIn /> },
    { path: "/*", element: <NotFound /> }
  ]);
  return routes;
};

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
