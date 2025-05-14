import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/reset.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TwoSeaterSection from './components/ShopPages/TwoSeater/TwoSeaterSection.jsx'
import ErrorPage from './components/others/Error.jsx'
import ThreeSeaterSection from './components/ShopPages/ThreeSeater/ThreeSeaterSection.jsx'
import FourSeaterSection from './components/ShopPages/FourSeater/FourSeaterSection.jsx'
import RootLayout from './layouts/rootLayout.jsx'
import ProductPage from './components/ProductPage/ProductPage.jsx'
import CartPage from './components/CartPage/CartPage.jsx'
import { CartProvider } from './components/CartPage/CartContext.jsx'
import Credits from './components/Credits/Credits.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: "twoseatersofas",
        element: <TwoSeaterSection />,
      },
      {
        path: "twoseatersofas/:productId",
        element: <ProductPage />,
      },
      {
        path: "threeseatersofas",
        element: <ThreeSeaterSection />,
      },
      {
        path: "threeseatersofas/:productId",
        element: <ProductPage />,
      },
      {
        path: "fourseatersofas",
        element: <FourSeaterSection />,
      },
      {
        path: "fourseatersofas/:productId",
        element: <ProductPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "credits",
        element: <Credits />,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>,
)