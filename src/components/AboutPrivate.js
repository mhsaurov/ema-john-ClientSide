import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './Context/UserContext';

const AboutPrivate = ({children}) => {
    const {user,loader} =useContext(AuthContext)
    const location = useLocation()

    if(loader){

        return <div class="flex flex-col w-16 min-h-[700] justify-center items-center ">
        <div class="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    }



    if(user && user.uid){
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace  />;
};

export default AboutPrivate;