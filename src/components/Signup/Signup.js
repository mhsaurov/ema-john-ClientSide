import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const Signup = () => {
    const {creatUser} = useContext(AuthContext); 
    const [error, setError] = useState(false);
    const handlersubmit = (event) =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        
        
//condition for form validation
        if(password !== confirm){
            setError('Your password didnot match ');
            return;
        };

        if(password.length < 6){
            setError('password should me six caractermore');
            return;
        };

        creatUser(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
        })
        .catch(error => {
            setError(error.message)
        })

    }
    return (
        <div className='form-container'> 
        <h2 className='title'>Sign Up</h2>
        <form onSubmit={handlersubmit}>
            <div className="form-control">
                <label htmlFor="email"></label>
                <input className='' type="email"  placeholder='Email' name='email' required/>
            </div>

            <div className="form-control">
                <label htmlFor="password"></label>
                <input className='' type="password"  placeholder='Password' name='password' required/>
            </div>
            <div className="form-control">
                <label htmlFor="confirm "></label>
                <input className='' type="password"  placeholder='Confirm Password' name='confirm' required/>
            </div>
            <p className='text-red-500 text-center mt-2'>{error}</p>
            <input className='btn-login' type="submit" value="Login" />
        </form>
        <p className='text-center'>Already have an account ?<Link to= '/login'><span className='text-orange-500'> Login</span></Link></p>
        
        
        <h2 className='or-style'>Or</h2>
        <p className='text-center'>{error}</p>
        
       
        
    </div>
    );
};

export default Signup;