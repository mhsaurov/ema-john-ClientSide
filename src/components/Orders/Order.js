import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Reviewitem from '../ReviewItems/Reviewitem';

const Order = () => {
    const {products,previouscart} = useLoaderData();
    const [cart , setCart] = useState(previouscart);
    const handleremoveitems = (id) =>{
        const remaning = cart.filter(producty => producty.id !== id);
        setCart(remaning);
        removeFromDb(id)
    }
 
    const clearcart = ()=>{
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className='orders-container'>
              {
                cart.map(product => <Reviewitem
                    key={product.id}
                    product={product}
                    handleremoveitems={handleremoveitems}
                ></Reviewitem>)
              }
                 {
                       
                        cart.length === 0 && <h2 className='text-center text-2xl mt-36'>No items for reviews <span className='text-red-500'> <Link to= '/'>please shope more</Link></span></h2>
                    
                    
                 }
    
            </div>
            <div className='cart-container'>
                <Cart clearcart={clearcart} cart={cart}> </Cart>
                <Link className='' to= '/shipping'>
                    <button className='Clear-btn mb-12 -mr-9  '>Proceed to shipping</button>
                </Link>

            </div>
        </div>
    );
};

export default Order;