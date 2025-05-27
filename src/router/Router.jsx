import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import RootLayput from '../Layout/RootLayput';
import Home from '../Pages/Home/Home';
import Register from '../Pages/Register/Register';
import SignIn from '../Pages/SignIn/SignIn';
export const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayput,
    children:[
        {
            index:true,
            Component:Home
        },
        {
        path:"register",
        Component:Register
        },
        {
          path:'signin',
          Component:SignIn
        }
    ]
   
  },
]);



