import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Cart.css';
import { clear } from '@testing-library/user-event/dist/clear';

const Cart = (props) => {
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
            <h4>Order Summary</h4>
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