import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Mainpage from './Pages/Mainpage';
import Home from './Pages/Home';
import Add from './Pages/Add';
import './main.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"add",
        element:<Add/>
      }

    ]
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

