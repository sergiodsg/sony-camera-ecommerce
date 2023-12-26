import { useRoutes, BrowserRouter } from "react-router-dom";
import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';
import Home from '../Home';

const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    // { path: "/shopping-cart", element: <Home />},
    // { path: "/sign-in", element: <SignIn /> },
    // { path: "/*", element: <NotFound /> },

  ]);
  return routes;
};
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Layout>
        <Navbar />
          <AppRoutes />
      </Layout>
    </BrowserRouter>
      
    </>
  )
}

export default App;