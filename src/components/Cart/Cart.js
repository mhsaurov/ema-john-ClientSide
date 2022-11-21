import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import React, { useContext } from 'react';
import './Cart.css';
import { AuthContext } from '../Context/UserContext';

const Cart = (props) => {
    const {user} = useContext(AuthContext);
    const { cart,clearcart , children} = props;
    // console.log(cart);
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
             <p className='bg-orange-600 text-white p-2 rounded-lg mb-5'> <span className='font-bold'>User Email : </span> {user?.email}</p>
            <h4 className='text-2xl font-bold mb-3'>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: {tax}</p>
            <h5>Grand Total: {grandTotal.toFixed(2)}</h5>
                <button onClick={clearcart} className='Clear-btn'>
                        <p className='btn-clear-text'>Clear Cart</p>
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </button>
               
                
                {children}
           
        </div>
    );
};   
export default Cart;