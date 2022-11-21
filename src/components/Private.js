import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './Context/UserContext';

const Private = ({children}) => {
    const {user,loader} = useContext(AuthContext)
    const location = useLocation()

    if(loader){
        return <div class="flex justify-center items-center">
  <div class="spinner-border animate-spin inline-block w-16 h-16 border-4 rounded-full" role="status">
    <span class="visually-hidden"></span>
  </div>
</div>
    }
    
    if(user && user.uid){
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default Private;