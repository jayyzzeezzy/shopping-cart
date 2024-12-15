import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import Shop from '../src/components/Shop.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
  },
  {
    path: "shop",
    element: <Shop />,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router}/>
  </StrictMode>,
)
