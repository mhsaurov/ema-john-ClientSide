import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import './Login.css';

const Login = () => {
    const {loginuser} = useContext(AuthContext);
    const [error, setError] = useState(false);
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"
 
  

    const navigate = useNavigate();


    const loginhandler = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

       
       
        loginuser(email,password)
        .then(resutl =>{
            const user = resutl.user
            form.reset()
            navigate(from, {replace: true})
            console.log(user)
        })
        .catch(error => {console.error(error)
         setError(error.message)
        })
    }
    return (
            <div className='form-container'> 
            <h2 className='title'>Login</h2>
            <form onSubmit={loginhandler}>
                <div className="form-control">
                    <label htmlFor="email"></label>
                    <input className='' type="email"  placeholder='Email' name='email' required/>
                </div>

                <div className="form-control">
                    <label htmlFor="password"></label>
                    <input className='' type="password"  placeholder='Password' name='password' required/>
                </div>
                <p className='text-red-500 text-center'>{error}</p>
                <input className='btn-login' type="submit" value="Login" />
            </form>
            <p className='text-center'>New to Ema-john? <Link to= '/signup'><span className='text-orange-500'>Create New Account</span></Link></p>
            
            <h2 className='or-style'>Or</h2>
           
            
           
            
        </div>
      
    );
};

export default Login;