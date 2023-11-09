import React from 'react';
import UserContext, { AuthContext } from '../components/contexts/UserContext';
import { Navigate } from 'react-router-dom';

const PraviteRoutes = ({children}) => {
    const {user, loading} = UserContext(AuthContext)
    
    if(loading){
        return <span className="loading loading-infinity loading-lg"></span>
    }

   if(user && user?.uid){
    return children;
   }
    return <Navigate to='/login'></Navigate>
};

export default PraviteRoutes;