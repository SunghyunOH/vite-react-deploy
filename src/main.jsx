import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'

const Router = createBrowserRouter([
  {
    path: "/vite-react-diploy/",
    element: <App />,
    children: [
      {
        path: "/vite-react-diploy/",
        element: <Home />,
      },
      {
        path: "/vite-react-diploy/contact",
        element: <Contact />,
      },
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
)
