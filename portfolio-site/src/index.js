import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About-me/About';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home/Home';
import Work from './pages/Work/Work';
import ProjectPage from './pages/Projects/ProjectPage';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path:'projects',
        element: <ProjectPage />
      }, 
      {
        path: 'work',
        element: <Work/>
      }
    ]
  },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
