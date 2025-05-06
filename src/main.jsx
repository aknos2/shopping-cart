import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/reset.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TwoSeaterSection from './components/ShopPages/TwoSeater/TwoSeaterSection.jsx'
import ErrorPage from './components/others/Error.jsx'
import ThreeSeaterSection from './components/ShopPages/ThreeSeater/ThreeSeaterSection.jsx'
import FourSeaterSection from './components/ShopPages/FourSeater/FourSeaterSection.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "twoseatersofas",
    element: <TwoSeaterSection />,
  },
  {
    path: "threeseatersofas",
    element: <ThreeSeaterSection />,
  },
  {
    path: "fourseatersofas",
    element: <FourSeaterSection />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
