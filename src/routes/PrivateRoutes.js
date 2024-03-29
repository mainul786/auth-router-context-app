import React, { useContext } from 'react';

import { Navigate } from 'react-router-dom';
import { AuthContext } from '../components/contexts/UserContext';

const PrivateRoutes = ({children}) => {
    const {user, loading} =useContext(AuthContext);

    if(loading){
        return <span className="loading loading-infinity loading-lg"></span>
    }
    if(user && user.uid){
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoutes;