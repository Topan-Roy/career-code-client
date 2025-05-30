import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivetRoutes = ({children }) => {
    const {user,loading}=use(AuthContext);
    const location=useLocation();
    if(loading){
        return <span className="loading loading-bars loading-lg"></span>
    }
    console.log(location.pathname)
    if(!user){
       return <Navigate to='/SignIn' state={location.pathname}></Navigate>
    }
    return children
};

export default PrivetRoutes;