import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import AboutMe from './pages/AboutMe'
import Contact from './pages/ContactMe'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: '/contactMe',
        element: <Contact />,
      },
      {
        path: '/projects',
        element: <Portfolio />,
      },
      {
        path: '/resume',
        element: <Resume />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)