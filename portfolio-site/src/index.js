import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home/Home';
import Work from './pages/Work/Work';
import ProjectPage from './pages/Projects/ProjectPage';
import SoloProjectPage from './pages/Projects/SoloProjectPage';

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
  {
    path: "/projects/:id",
    element: <SoloProjectPage/>,
    errorElement: <ErrorPage />
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
