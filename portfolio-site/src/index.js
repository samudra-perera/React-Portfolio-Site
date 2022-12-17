import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About-me/About';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    // errorElement: <ErrorPage />,
  },
  {
    path:'/About',
    element: <About/>,
    // errorElement: <ErrorPage />,
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
