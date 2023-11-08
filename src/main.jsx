import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { Navbar } from './components/Navbar.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import { Product } from "./pages/Product.jsx"
import { Header } from "./components/Header.jsx"
import { ProductList } from "./components/ProductList.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/product",
    element: <Product />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <BrowserRouter>
   
    </BrowserRouter>
  </React.StrictMode>
)