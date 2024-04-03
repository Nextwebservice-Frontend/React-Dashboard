import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Profile from './Components/dashboard/Profile/Profile';
import MyModal from './Components/dashboard/Profile/MyModal';



const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children : [

      // {
      //   path: '/',
      //   element :<Dashboard></Dashboard>
      // },
      {
        path: '/profile',
        element :<Profile></Profile>
      },
      {
        path: '/modal',
        element :<MyModal></MyModal>
      }

    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
