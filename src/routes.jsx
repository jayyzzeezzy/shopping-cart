import App from './App.jsx'
import Shop from './components/Shop.jsx'
import Product from './components/Product.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import HomePage from './components/HomePage.jsx';

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
      },
    ],
  },
];

export default routes;