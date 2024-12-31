import App from './App.jsx'
import Shop from './components/pages/Shop.jsx'
import Product from './components/pages/Product.jsx';
import ErrorPage from './components/pages/ErrorPage.jsx';
import HomePage from './components/pages/HomePage.jsx';
import Cart from './components/pages/Cart.jsx';
import ProductError from './components/pages/ProductError.jsx';

const routes = [
  {
    path:"/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "shop",
        element: <Shop />,
      }, 
      {
        path: "/shop/product",
        element: <Product />,
        errorElement: <ProductError />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
];

export default routes;