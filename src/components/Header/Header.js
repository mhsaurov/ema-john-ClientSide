import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import UserContext, { AuthContext } from '../Context/UserContext';
import './Header.css';

const Header = () => {
    const {user,logout} = useContext(AuthContext);
  

    return (
        <nav  className='header'>
           <Link to= '/'> <img src={logo} alt="" /></Link>
            <div id='menu'>
                <Link to = "/">Shop</Link>
                <Link to = "/about">About</Link>
                <Link to = "/inventory">Inventory</Link>
                <Link to = "/orders">Orders</Link>
                
            { user?.uid ? 
             <Link onClick={logout}><button className=' lg:-mr-9 bg-slate-50 px-4 py-1 text-black font-bold capitalize rounded-3xl hover:bg-orange-400 duration-300 hover:text-white'>Sign Out</button></Link>
             :

             <>
               <Link to= '/login'><button className=' lg:-mr-9 bg-slate-50 px-4 py-1 text-black font-bold capitalize rounded-3xl hover:bg-orange-400 duration-300 hover:text-white'>Sign In</button></Link>
            
                <Link to= '/signup'><button className=' bg-slate-50 px-4 text-black py-1 font-bold capitalize rounded-3xl hover:bg-orange-400 duration-300 hover:text-white '>Sign Up</button></Link>
             </>

            }

            
                
               
           
            </div>
        </nav>
    );

    
};

export default Header;