// import react, react-dom, and react-router-dom relevant for this file
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// import app & index
import App from './App.jsx'
import './index.css'

//import pages for react router
import ErrorPage from './pages/errorPage.jsx';
import HomePage from './pages/homePage.jsx';
import AboutMe from './pages/aboutMePage.jsx';
import Projects from './pages/projectsPage.jsx';
//UNDEFINED, PLEASE DEFINE
import Contact from './pages/contactPage.jsx';
import Resume from './pages/resumePage.jsm'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutMe/>,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'resume',
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)