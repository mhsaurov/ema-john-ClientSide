import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError()
    return (
        <div className='flex flex-col min-h-[700px] justify-center items-center'>
            <h1 className='text-4xl text-red-600' >Ops ! An Error Ocurred ⚠️</h1>
            <br />
            {
                error && (
                    <div>
                        <p className='text-red-500'>{error.statusText || error.message}</p>
                        <p className='text-center text-red-900'>{error.status}</p>
                      
                    </div>
                )
            }
        </div>
    );
};

export default Error;