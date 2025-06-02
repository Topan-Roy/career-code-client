import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import RootLayput from '../Layout/RootLayput';
import Home from '../Pages/Home/Home';
import Register from '../Pages/Register/Register';
import SignIn from '../Pages/SignIn/SignIn';
import JobDaleils from '../Pages/JobDaleils';
import PrivetRoutes from '../Routes/PrivetRoutes';
import JobApply from '../Pages/JobApply';
import MyApplications from '../Pages/MyApplications';
import AddJob from '../Pages/AddJobs/AddJob';
import MypostedJobs from '../Pages/MypostedJobs/MypostedJobs';
import ViewApplications from '../Pages/ViewApplications/ViewApplications';
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
          path:'/job/:id',
          loader:({params})=>fetch(`http://localhost:3000/jobs/${params.id}`),
          Component:JobDaleils
        },
        {
          path:'/jobApply/:id',
          element:<PrivetRoutes><JobApply></JobApply></PrivetRoutes>
        },
        {
          path:'myapplication',
          element:<PrivetRoutes><MyApplications></MyApplications></PrivetRoutes>
        },
        {
          path:'addjob',
          element:<PrivetRoutes><AddJob></AddJob></PrivetRoutes>
        },
        {
          path:'mypostedjobs',
          element:<PrivetRoutes><MypostedJobs></MypostedJobs></PrivetRoutes>
        },
        {
          path:'applications/:job_id',
          element:<PrivetRoutes><ViewApplications></ViewApplications></PrivetRoutes>,
          loader:({params})=>fetch(`http://localhost:3000/applications/job/${params.job_id}`)
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



