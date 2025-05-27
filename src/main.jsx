import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './router/Router.jsx'
import {RouterProvider,} from "react-router";
import Authprovider from './Context/AuthContext/Authprovider/Authprovider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
<Authprovider>
       <RouterProvider router={router} />
</Authprovider>
  </StrictMode>,
)
